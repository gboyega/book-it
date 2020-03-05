import React, { Component } from "react";
import { Button, Container, Label, Input } from "reactstrap";
import "../App.css";

class Admin1 extends Component {
  state = {
    name: "",
    nameError: "",
    location: "",
    locationError: "",
    file: null,
    features: "",
    featuresError: "",
    userName: "",
    admin: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFile = e => {
    let file = e.target.files[0];
    this.setState({ file: file });
  };
  handleChange = e => {
    this.setState({ selectedValue: e.target.value });
  };

  handleUpload = e => {
    let file = this.state.file;

    let imageData = new imageData();
    imageData.append("image", file);
    imageData.append("image", "conference room");

    fetch({
      url: "/api/admin/image",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: imageData
    }).then(res => {});
  };

  validate = () => {
    let isError = false;

    const errors = {
      nameError: "",
      locationError: "",
      featuresError: ""
    };

    if (this.state.name.length < 5) {
      isError = true;
      errors.nameError = "Name requires at least 5 letters";
    }
    if (this.state.location.length < 3) {
      isError = true;
      errors.locationError = "Location is required";
    }
    if (this.state.features < 1) {
      isError = true;
      errors.featuresError = "space features required";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();

    const err = this.validate();
    if (err == true) {
      //clear form
      this.setState({
        name: "",
        nameError: "",
        location: "",
        locationError: "",
        features: "",
        featuresError: ""
      });
    }
  };

  //create user
  userRole = e => {
    e.preventDefault();
    try {
      const { userName, admin, password } = this.state;
      fetch("/api/admin/adrole", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, admin, password })
      })
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else if (response.status === 401) {
            alert("incorrect entry, please check and try again");
          } else {
            alert("Network error, please try again in a bit.");
          }
        })
        .then(data => {
          alert("user created successful.");
          this.setState({ userName: "", admin: "", password: "" });
        })
        .catch(err => console.log(err));
    } catch (error) {
      alert("Error! please try again");
      console.log(error);
    }
  };
  ///////////////////////////////////

  render() {
    return (
      <Container style={{ marginBottom: "150px", marginTop: "150px" }}>
        <div className="col-md-4 admin1">
          <form>
            <div className="adminHeader">
              {" "}
              <p className="adHeader1">Add Rooms</p>
            </div>

            <div className="newad">
              <div>
                <Label for="name">Name</Label>
                <Input
                  type="name"
                  name="name"
                  value={this.state.name}
                  placeholder="Name"
                  className="mb-3 newad1"
                  errortext={this.state.nameError}
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div>
                <Label for="location">Location</Label>
                <Input
                  type="name"
                  value={this.state.location}
                  name="location"
                  placeholder="location "
                  className="mb-3"
                  errortext={this.state.locationError}
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div>
                <Label for="image">Upload image</Label>
                <Input
                  type="file"
                  value={this.state.image}
                  name="file"
                  placeholder="Upload Image"
                  className="mb-3"
                  onChange={e => this.handleFile(e)}
                />
                <button>upload</button>
              </div>

              <br />
              <br />
              <div>
                <Label for="features">Features</Label>
                <Input
                  type="text"
                  value={this.state.features}
                  name="features"
                  placeholder="feature 1, feature 2, etc..."
                  className="mb-3"
                  errortext={this.state.featuresError}
                  onChange={e => this.onChange(e)}
                />
                <small>comma seperated list of features</small>
              </div>
              <Button
                onClick={e => this.onSubmit(e)}
                color="dark"
                style={{ marginTop: "2rem", width: "100%" }}
                block
              >
                Add
              </Button>
            </div>
          </form>
        </div>

        <div className="col-md-3 admin1">
          <form>
            <div className="adminHeader">
              {" "}
              <p className="adHeader1">Create User</p>
            </div>

            <div className="newad">
              <Label for="name">Name</Label>
              <Input
                type="name"
                name="userName"
                value={this.state.name}
                placeholder="Name"
                className="mb-3 newad1"
                errortext={this.state.nameError}
                onChange={e => this.onChange(e)}
              />
              <select
                defaultValue={this.state.selectValue}
                onChange={this.handleChange}
              >
                <option value="admin">Admin</option>
                <option value="user role">Member</option>
              </select>

              <br />
              <Label for="password">Password</Label>
              <Input
                type="text"
                value={this.state.password}
                name="password"
                placeholder="Password"
                className="mb-3"
                errortext={this.state.passwordError}
                onChange={e => this.onChange(e)}
              />

              <Button
                onClick={e => this.onSubmit(e)}
                color="dark"
                style={{ marginTop: "2rem", width: "100%" }}
                block
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default Admin1;
