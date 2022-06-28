import React from "react";
import Button from "../../../../components/UI/Button/Button";
import classes from "./ContactData.css";

const ContactData = () => {
    const state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    return(
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Mail" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success">ORDER</Button>
            </form>
        </div>
    );
}

export default ContactData;