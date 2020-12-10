import React from 'react'
import axios from 'axios'

class Form extends React.Component {
  state =  {
    ages: [1, 2, 3, 4, 5, 6],
    hobies: [
      { id: 1, name: 'Đá bóng' },
      { id: 2, name: 'Cầu lông' },
      { id: 3, name: 'Bóng chuyền' },
      { id: 4, name: 'Đọc sách' }
    ],
    form: {
      name: '',
      email: '',
      password: '',
      phone: '',
      note: '',
      age: 2,
      gender: '',
      hobbies: [],
      avatar: null
    }
  }

  onChange = event => {
    const { name, value, type, files } = event.target

    let newValue = value

    if (type === 'checkbox') {
      const oldValue = this.state.form[name]
      const isExist = oldValue.includes(value)

      if (isExist) {
        newValue = oldValue.filter(item => item != value)
      } else {
        newValue = [...oldValue, value]
      }
    }

    if (type === 'file') {
      const [avatar] = files
      newValue = avatar || null
    }

    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: newValue
      }
    })
  }

  submit = () => {
    const { form } = this.state

    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('avatar', form.avatar)

    axios.post('/', formData)
    console.log(formData)
  }

  render() {
    const {
      ages,
      hobies,
      form
    } = this.state

    return (
      <>
        <h1>Form</h1>

        <table>
          <thead>
            <tr>
              <th>Nội dung</th>
              <th>Giá trị</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Họ tên:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  key="a5"
                  onChange={this.onChange}
                />
              </td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  key="a4"
                  onChange={this.onChange}
                />
              </td>
            </tr>

            <tr>
              <td>Mật khẩu:</td>
              <td>
                <input key="a3" type="password" name="password" value={form.password} onChange={this.onChange} />
              </td>
            </tr>

            <tr>
              <td>Avatar:</td>
              <td>
                <input type="file" name="avatar" onChange={this.onChange} />
              </td>
            </tr>

            <tr>
              <td>SĐT:</td>
              <td>
                <input key="a1" type="text" name="phone" value={form.phone} onChange={this.onChange} />
              </td>
            </tr>

            <tr>
              <td>Tuổi:</td>
              <td>
                <select name="age" defaultValue={form.age} onChange={this.onChange}>
                  {
                    ages.map((age, index) => {
                      return <option
                        key={index}
                        value={age}
                        onChange={this.onChange}
                      >{age} tuổi</option>
                    })
                  }
                </select>
              </td>
            </tr>

            <tr>
              <td>Giới tính:</td>
              <td>
                <label><input defaultChecked={form.gender === 'male'} type="radio" name="gender" value="male" onChange={this.onChange} /> Nam</label>
                <label><input defaultChecked={form.gender === 'female'} type="radio" name="gender" value="female" onChange={this.onChange} /> Nữ</label>
              </td>
            </tr>

            <tr>
              <td>Sở thích:</td>
              <td>
                {
                  hobies.map(hobby => {
                    return <label>
                      <input
                        key={hobby.id}
                        value={hobby.id}
                        type="checkbox"
                        name="hobbies"
                        defaultChecked={form.hobbies.includes(hobby.id)}
                        onChange={this.onChange}
                      />
                      {hobby.name}
                    </label>
                  })
                }
              </td>
            </tr>

            <tr>
              <td>Ghi chú:</td>
              <td>
                <textarea key="a2" name="note" value={form.note} onChange={this.onChange} />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button onClick={this.submit}>SUBMIT</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}

export default Form
