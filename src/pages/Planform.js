import React, { Component } from "react";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import logo from "../svg/logo.svg";
import FooterChoosePlan from "../components/chooseplan/FooterChoosePlan";

import { Link, NavLink } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import { checkmark } from "react-icons-kit/icomoon/checkmark";

const initState = {
  checked: true,
  idEmpty: "",
  id: "li-pseudo",
};

const selectRow = () => {
  let radios = document.getElementsByName("select");
  for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
      // remove class from the other rows

      var el = document.getElementById("first-tr");

      // go to the nex sibing
      while ((el = el.nextSibling)) {
        if (el.tagName === "TR") {
          // remove the selected class
          el.classList.remove("selected");
        }
      }

      // radio  -      td      -          tr
      this.parentElement.parentElement.classList.toggle("selected");
    };
  }
};
selectRow();

class ChoosePlan extends Component {
  state = initState;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // Checkbox
  handlerCheckbox = (e) => {
    this.setState({
      chekcked: e.target.checked,
    });
  };

  handleId = () => {
    this.setState({
      id: "li-pseudo",
    });
  };

  // selectRow = () => {
  //   let radios = document.getElementsByName("select");
  //   for (let i = 0; i < radios.length; i++) {
  //     radios[i].onclick = function () {
  //       // remove class from the other rows

  //       var el = document.getElementById("first-tr");

  //       // go to the nex sibing
  //       while ((el = el.nextSibling)) {
  //         if (el.tagName === "TR") {
  //           // remove the selected class
  //           el.classList.remove("selected");
  //         }
  //       }

  //       // radio  -      td      -          tr
  //       this.parentElement.parentElement.classList.toggle("selected");
  //     };
  //   }
  // };
  // // selectRow();

  render() {
    return (
      <MainContainer>
        {/* header top */}
        <div className="header-top">
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <NavLink to="/login" className="btn signIn-btn">
            Sign In
          </NavLink>
        </div>
        {/* header content */}
        <h2>Welcome to the plan form!!!</h2>
        {/* <div className="plangrid-header">
          <ul class="select-plan">
            <li>
              <input type="radio" id="p1" name="plan" />
              <label for="p1">Basic</label>
            </li>
            <li>
              <input type="radio" id="p2" name="plan" />
              <label for="p2">Standard</label>
            </li>
            <li>
              <input
                type="radio"
                id="p3"
                name="plan"
                defaultChecked={this.state.checked}
              />
              <label for="p3">Premium</label>
            </li>
          </ul>
        </div> */}
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content container">
          <table id="table">
            <thead style={{ marginBottom: "2rem !important" }}>
              <tr className="select-plan">
                <th>
                  <input
                    type="radio"
                    id="p1"
                    name="select"
                    onClick={this.selectRow}
                  />
                  <label htmlFor="p1">Basic</label>
                </th>
                <th>
                  <input type="radio" id="p2" name="select" />
                  <label htmlFor="p2">Standard</label>
                </th>
                <th>
                  <input
                    type="radio"
                    id="p3"
                    name="select"
                    defaultChecked={this.state.checked}
                  />
                  <label htmlFor="p3">Premium</label>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr id="first-tr">
                <td>Monthly price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>HD available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Ultra HD available</td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={cross} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on your laptop, TV, phone and tablet </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Unlimited movies and TV shows</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
                <td>
                  <Icon icon={checkmark} size={10} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <FooterChoosePlan />
      </MainContainer>
    );
  }
}

export default ChoosePlan;

// Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1000px",
  mdDesktop: "950px",
});

// Main container
const MainContainer = styled.div`
  background: #fff;
  color: #000;
  

  // header top
  .header-top {
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #e6e6e6;
  }

  //////////////////////////////

  .plangrid-header {
    margin-bottom: 13rem;
  }

  .select-plan {
    list-style-type: none;
    margin: 1.5rem 0 1rem 0;
    padding: 0;
    color: #fff;
    position: relative;
    float: left;
    left: 100%;
  }

  .select-plan th {
    float: left;
    margin: 0 2.3rem 0 0;
    padding: 3rem;
    width: 120px;
    height: 120px;
    border-radius: 3px;
    position: relative;
    background: var(--main-red-not-selected);
  }

  .select-plan label,
  .select-plan input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 3px;
  }

  .select-plan label {
    padding-top: 50px !important;
    text-align: center;
  }

  input[type="radio"]:checked + label::after {
    content: "";
    display: block;
    border: 10px solid #e50914;
    border-top-color: #e50914;
    position: absolute;
    top: 90%;
    left: 40%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translatex(-50%);
    transform: rotate(45deg);
  }

  // input[type="radio"]:checked + table tbody tr td #red {
  //   color: tomato !important;
  // }
  
  .select-plan input[type="radio"] {
    opacity: 0.01;
    z-index: 1;
  }

  .select-plan input[type="radio"]:checked + label,
  .Checked + label {
    background: var(--main-red);
  }

  .select-plan label {
    padding: 5px;
    cursor: pointer;
    z-index: 90;
  }

  .select-plan label:hover {
    background: var(--main-red);
  }
  //////////////////////

  /*************************************************
 * table start
 * **********************************************/
  // .tab-content {
  //   margin: 0 10%;
  //   padding-bottom: 1%;
  // }

  // .tab-top-content {
  //   display: grid;
  //   grid-template-columns: repeat(12, 1fr);
  //   padding: 3rem 0 0;
  //   ${customMedia.lessThan("lgDesktop")`
  // grid-template-columns: 1fr;
  // row-gap: 1.5rem;
  // text-align: center;
  // `}
  // }

  tr{transition: all ease-in-out .25s}
            .selected{background-color:blue;color:#fff;font-weight: bold}

  // Tab Bottom Content
  .tab-bottom-content {
    margin: 2rem auto;
    padding: 2.5rem;
  }

  // Table
  table {
    width: 100%;
    padding: 0 3rem !important;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }



  table tbody {
    
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    // text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    border-bottom: 1px solid #999;
  }

  /*************************************************
 * table end
 * **********************************************/

  // header content
  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 65%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-derection: column;
    z-index: 2;
  }

  .header-content img {
    margin: 6.25rem auto 1.875rem;
  }




  // // the signin btn
  .signIn-btn {
    margin: 1.5625rem 3% 0;
    padding: 0.4375rem 1.0625rem
    font-weight: 700;
    line-height: normal;
    color: var(--main-dark);
    font-size: 1.25rem;
    right: 0;
    position: absolute;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }

  // }
`;

// logo
const Logo = styled.img`
  width: 10.5rem;
  height: 3.5rem;
  position: absolute;
  top: 49%;
  left: 13%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
