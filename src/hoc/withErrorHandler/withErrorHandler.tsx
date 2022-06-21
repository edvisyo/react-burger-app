import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";


const withErrorHandler = (WrappedComponent:any, axios: AxiosInstance) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use((request: AxiosRequestConfig) => {
                this.setState({error: null});
                return request;
            });
            axios.interceptors.response.use((response: AxiosResponse) => response, (error:string) => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return(
                <Aux>
                    <Modal show={this.state.error}
                           modalClose={this.errorConfirmedHandler}>
                        <p>{this.state.error ? this.state.error['message'] : null}</p>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;