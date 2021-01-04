import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Divider, Select, ImgCrop, Upload } from 'antd'
import axios from 'axios'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const MyForm = () => {
  const [form] = Form.useForm()
  const [provinces, setProvinces] = useState([])
  const [province, setProvince] = useState(null)
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState(null)
  const [wards, setWards] = useState([])
  const [imageUrl, setImageUrl] = useState('')
  const [loadingAvatar, setLoadingAvatar] = useState(false)

  const onFinish = (values) => {
    console.log(values)
  }

  const validateName = (rule, value) => {
    if (value.indexOf('a') !== -1) {
      return Promise.reject('Không được nhập chữ a')
    }

    return Promise.resolve()
  }

  const validateUserName = (rule, value) => {
    const regex = /[^a-z0-9_]/g
    const match = regex.test(value)

    if (match) {
      return Promise.reject('Username chỉ được phép xuất hiện các ký tự a-z, 0-9 và _')
    }

    return Promise.resolve()
  }

  const fetchAllProvinces = () => {
    axios.get('http://localhost:8000/provinces')
      .then(response => {
        setProvinces(response.data)
      })
  }

  const fetchDistrictsByProvinceId = id => {
    axios.get(`http://localhost:8000/districts?provinceId=${id}`)
      .then(response => {
        setDistricts(response.data)
      })
  }

  const fetchWardsByDistrictId = id => {
    axios.get(`http://localhost:8000/wards?districtId=${id}`)
      .then(response => {
        setWards(response.data)
      })
  }

  const setCurrentProvince = async value => {
    setProvince(value)
    setDistrict(null)
    setDistricts([])

    form.setFieldsValue({
      district: null,
      ward: null
    })
    fetchDistrictsByProvinceId(value)
  }

  const setCurrentDistrict = value => {
    setDistrict(value)
    form.setFieldsValue({
      ward: null
    })
    fetchWardsByDistrictId(value)
  }

  const beforeUpload = () => {

  }

  const onChangeAvatar = (info) => {
    if (info.file.status === 'uploading') {
      setLoadingAvatar(true)
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
          setImageUrl(imageUrl)
          setLoadingAvatar(false)
        }
      );
    }
  }

  const uploadButton = (
    <div>
      {loadingAvatar ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  useEffect(() => {
    fetchAllProvinces()
  }, [])

  const submitForm = async () => {
    const payload = await form.getFieldsValue()
    console.log(payload)
  }

  const customRequest = (info) => {
    getBase64(info.file, imageUrl => {
      setImageUrl(imageUrl)
      console.log(imageUrl)
      setLoadingAvatar(false)
    });
  }

  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={12} offset={6}>
        <h1>Tạo form</h1>

          <Form form={form} name="control-hooks" onFinish={onFinish} onSubmit={submitForm}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                { required: true, message: 'Please input your name' },
                { max: 12 },
                { validator: validateName }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="userName"
              label="User Name"
              rules={[
                { required: true, message: 'Please input your userName' },
                { max: 12 },
                { validator: validateUserName }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="province"
              label="Province"
              rules={[
                { required: true, message: 'Hãy chọn 1 tỉnh' }
              ]}
            >
              <Select onChange={setCurrentProvince}>
                {
                  provinces.map(province => {
                    return <Select.Option
                      key={province.id}
                      value={province.id}>
                        {province.name}
                      </Select.Option>
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item
              name="district"
              label="District"
              rules={[
                { required: true, message: 'Hãy chọn 1 huyện' }
              ]}
            >
              <Select disabled={!province} onChange={setCurrentDistrict}>
                {
                  districts.map(district => {
                    return <Select.Option
                      key={district.id}
                      value={district.id}>
                        {district.name}
                      </Select.Option>
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item
              name="ward"
              label="Ward"
              rules={[
                { required: true, message: 'Hãy chọn 1 xã' }
              ]}
            >
              <Select disabled={!district}>
                {
                  wards.map(ward => {
                    return <Select.Option
                      key={ward.id}
                      value={ward.id}>
                        {ward.name}
                      </Select.Option>
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item
              name="avatar"
              label="Avatar"
              rules={[
                { required: true, message: 'Hãy chọn avatar' }
              ]}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                customRequest={customRequest}
                beforeUpload={beforeUpload}
                onChange={onChangeAvatar}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Form.Item>

            <Button type="primary" onClick={submitForm}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default MyForm
