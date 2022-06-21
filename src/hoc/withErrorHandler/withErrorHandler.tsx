import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";


const withErrorHandler = (WrappedComponent:any, axios: AxiosInstance) => {
    return class extends Component {

        state = {
            error: null,
            requestInterceptors: 0,
            responseInterceptors: 0
        }

        // UNSAFE lifecycle hook!
        componentWillMount() {
            this.state.requestInterceptors = axios.interceptors.request.use((request: AxiosRequestConfig) => {
                this.setState({error: null});
                return request;
            });
            this.state.responseInterceptors = axios.interceptors.response.use((response: AxiosResponse) => response, (error:string) => {
                this.setState({error: error});
            });
        }

        componentWllUnmount() {
            axios.interceptors.request.eject(this.state.requestInterceptors);
            axios.interceptors.response.eject(this.state.responseInterceptors);
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