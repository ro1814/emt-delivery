import React, { useState } from "react";
import "../styles/EmtScreenStyles.css";
import { Button, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const EmtScreen = () => {
  const [isCheckedClientScope, setIsCheckedClientScope] = useState(false);

  const handleOnChangeClientScope = () => {
    setIsCheckedClientScope(!isCheckedClientScope);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <h1 className="emtTitle">EMT Reporting</h1>
      <Container size="xl">
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                checked={isCheckedClientScope}
                onChange={handleOnChangeClientScope}
                className="checkBox"
                label="Client Scope"
                name="ClientScope"
                type="checkbox"
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                checked={isChecked}
                onChange={handleOnChange}
                className="checkBox"
                label="Asset Manager"
                name="assetManager"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>
        <Form>
          {isCheckedClientScope ? (

            <Form.Group controlId="formFileSm" className="mb-3">
              <h2 className="emtSubtitle">Select upload type</h2>
              <Form.Label>Format: xls, xlsx or CSV Max size 5MB</Form.Label>
              <Form.Control type="file" size="sm" accept="xlsx, .xls, .csv" />
              <Button type="submit" className=" btn rounded-circle dlBtn">
                <FontAwesomeIcon icon={faDownload} />
              </Button>
              <div className="text-center">
                <Button
                  type="submit"
                  className="justify-content-center dlReport "
                >
                  Download Report
                </Button>
              </div>
            </Form.Group>
          ) : (
            !isCheckedClientScope
          )}
        </Form>
        <Form>
{ isChecked ? (
        
        <Form.Group className="mb-3">
          <h1 className="exportTitle">Export</h1>
          <Form.Label>Supplier</Form.Label>
          <Form.Select>
            <option>Supplier 1</option>
            <option>Supplier 2</option>
            <option>Supplier 3</option>
            <option>Supplier 4</option>
          </Form.Select>

          <Form.Label><strong>Labels</strong></Form.Label>

        </Form.Group>
        ) : (!isChecked)}
        </Form>
        
      </Container>
    </>
  );
};
