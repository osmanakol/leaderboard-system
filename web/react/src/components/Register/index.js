import React, { useEffect, useState } from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import { Dialog } from "@progress/kendo-react-dialogs";

export default function Register({ countries, ...props }) {
  const [modal, setModal] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [usernameNull, setUsernameNull] = useState(true);
  const [countryNull, setCountryNull] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState({})
  const [getUsername, setUsername] = useState()
  const input = (e) => {
    if (e.target.name == "username") {
      if (e.target.value != "") {
        setUsernameNull(false);
        setUsername(e.target.value)
        console.log(getUsername)
      } else {
        setUsernameNull(true);
      }
    }
    if (e.target.name == "country") {
      setCountryNull(false);
      setSelectedCountry(e.target.value)
    }
  };

  const toggleDialog = () => {
    setModal(!modal);
  };

  const Submit = () => {
      //useEffect(() => {
          fetch("http://167.172.53.243/api/player",{
            method: "POST",
            body: JSON.stringify({
              "username": getUsername,
              "country": selectedCountry._id
            }),
            headers: {"content-type":"application/json"}
          }).then((resp) => {
              return resp.json()
          }).then((json) => {
            console.log(json)
            return json
          })
      //})
  }
  console.log(countryList);

  return (
    <>
      <Button
        look="outline"
        onClick={toggleDialog}
        style={{
          backgroundColor: "#ff6600",
          color: "white",
          borderColor: "#ff6600",
        }}
      >
        Register
      </Button>

      {modal && (
        <Dialog title={"Register"} onClose={toggleDialog}>
          <Form
            onSubmit={() => Submit()}
            render={(formRenderProps) => (
              <FormElement
                style={{
                  width: 650,
                }}
              >
                <fieldset className={"k-form-fieldset"}>
                  <div className="mb-3">
                    <Input
                      name={"username"}
                      label={"Username"}
                      required={true}
                      onChange={input}
                    />
                  </div>

                  <div className="mb-3">
                    <Field
                      name={"country"}
                      label={"Country"}
                      component={DropDownList}
                      data={countries}
                      textField="country_name"
                      dataItemKey="_id"
                      onChange={input}
                    />
                  </div>
                </fieldset>
                <div className="k-form-buttons">
                  <button
                    type={"submit"}
                    className="k-button"
                    disabled={
                      (usernameNull == false) & (countryNull == false)
                        ? false
                        : true
                    }
                  >
                    Submit
                  </button>
                </div>
              </FormElement>
            )}
          />
        </Dialog>
      )}
    </>
  );
}