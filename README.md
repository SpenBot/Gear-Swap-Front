# gear-swap-front
Camera Gear Community Rental App -  Front End

Technologies:
- React
- Redux
- React Router
- Axios
- Moment

Basic Features:
- Guest can search local providers.
- Users can create an inventory of items they wish to rent-out.
- Users can create a favorites list of providers.

Unclear Features:
- Upon returning an item, a renter must provide feedback in order to have their deposit returned?
- Upon having an item returned, the loaner must provide feedback to get paid?
- Ratings for users?
- How do you set up an a renting appointment? Maybe a loaner has a set of available times listed on their profile. Then the renter sends a request for an item with

Monetizing:
- Either Ads, or there is a service charge for each transaction for both or one of the parties.  








>> Need to figure out nesting databases in SQL so I can make "reservations"
>> The texting technology that Bill used
>> Provider Rating, Renter Rating
>> Tasks


// let inventoryList = this.props.user.inventory.map((thing) => {
//   return (
//   <ul>
//     <li>ITEM: {thing.item}</li>
//     <li>TYPE: {thing.type}</li>
//     <li>CONDITION: {thing.condition}</li>
//     <li>PRICE: ${thing.price}.00</li>
//   </ul>
//   )
// })
















>>> Whats all this localStorage stuff?

// username: localStorage.getItem('user'),
// photo_url: localStorage.getItem('photo'),
// password: localStorage.getItem('password'),


// localStorage.setItem('user', '')
// localStorage.setItem('photo', '')
// localStorage.setItem('password', '')

// localStorage.setItem("username", res.data.username)
// localStorage.setItem("photo", res.data.photo_url)
// localStorage.setItem("password", res.data.password)
// console.log(`User ${this.state.user.username} signed in.`)

// localStorage.setItem("user", res.data.username)
// localStorage.setItem("photo", res.data.photo_url)
// localStorage.setItem("password", res.data.password)
// localStorage.setItem("inventory", res.data.inventory)








// class UserPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: this.props.user ? this.props.user.username : '',
//
//       photo_url: this.props.user ? this.props.user.photo_url : '',
//       password: this.props.user ? this.props.user.password : '',
//       usernameEdit: this.props.user ? this.props.user.username : '',
//       photo_urlEdit: this.props.user ? this.props.user.photo_url : '',
//       passwordEdit: this.props.user ? this.props.user.password : ''
//     }
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleUpdate = this.handleUpdate.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//     }
//
//
//
//     componentWillReceiveProps(newProps) {
//       console.log(newProps)
//       this.setState({
//         username: newProps.user.username,
//         photo_url: newProps.user.photo_url,
//         password: newProps.user.password
//       })
//     }
//
//
//     handleChange(e) {
//       console.log(`Target is = ${e.target}`);
//       console.log(`This is e.target.name = ${e.target.name}`);
//       this.setState({
//           [e.target.name]:e.target.value
//
//     }, ()=>console.log(`${this.state}`))
//   }
//
//
//
//   handleUpdate(e) {
//     e.preventDefault();
//     axios.put(`https://cmps-backend.herokuapp.com/api/users/${this.state.username}`, {
//       username: this.state.usernameEdit,
//       photo_url: this.state.photo_urlEdit,
//       password: this.state.passwordEdit
//     })
//     console.log(`UserNameEdit from UserPage Update = ${this.state.usernameEdit}`)
//     console.log(`Photo_UrlEdit from UserPage Update = ${this.state.photo_urlEdit}`)
//     console.log(`PasswordEdit from UserPage Update = ${this.state.passwordEdit}`)
//   }
//
//      handleDelete(e) {
//       e.preventDefault();
//       axios.delete(`https://cmps-backend.herokuapp.com/api/users/${this.state.username}/delete`, {
//         username: this.state.username,
//         photo_url: this.state.photo_url
//       })
//       console.log('User Deleted')
//     }
//
//
//
//
//
//
//   render() {
//     return (
//     <div className="userPage">
//
//       <p> {this.state.username} </p>
//       <img src={this.state.photo_url} alt='Mug Shot'/>
//
//
//       <div className="editDelete">
//       <form onSubmit={this.handleUpdate}>
//
//         <p id="profile">Profile</p>
//         <label>
//           Username:
//           <input name="usernameEdit" type="text"
//             value={this.state.usernameEdit}
//             onChange={this.handleChange} />
//         </label>
//           <br/>
//         <label>
//           Profile Pic:
//           <input name="photo_urlEdit" type="text"
//             value={this.state.photo_urlEdit}
//             onChange={this.handleChange} />
//         </label>
//         <br/>
//         <label>
//         Password:
//         <input name="passwordEdit" type="text"
//           value={this.state.passwordEdit}
//           onChange={this.handleChange} />
//         </label>
//         <br/>
//           <input type="submit" value="Edit" />
//       </form>
//
//         <button onClick={this.handleDelete}>
//           Delete Profile
//         </button>
//       </div>
//
//
//       <br/>
//     </div>
//     )
//   }
// }
