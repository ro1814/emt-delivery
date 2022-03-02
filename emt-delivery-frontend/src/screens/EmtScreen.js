import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../styles/EmtScreenStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export const EmtScreen = () => {
  return (
    <>
      <h1 className="emtTitle">EMT Reporting</h1>
      <Container size='xl'>
        <h2 className="emtSubtitle">Select upload type</h2>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                className="checkBox"
                label="Client Scope"
                name="SlientScope"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
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
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Format: xls, Max size 5MB</Form.Label>
          <Form.Control type="file" size="sm"/>
        <Button type='submit' className=' btn rounded-circle dlBtn'><FontAwesomeIcon icon={faDownload} /></Button>

        </Form.Group>
        </Form>
      </Container>
    </>
  );
};
