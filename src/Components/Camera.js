import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Webcam from 'react-webcam';
import ImagePlaceholder from "../Assets/Images/imagePlaceholder.png";
import { FaCamera, FaSave } from 'react-icons/fa';


export default class Camera extends Component {
    constructor() {
        super();
        this.cameraRef = React.createRef()
        this.state = {
            capturedStatus: ImagePlaceholder
        }
    }
    onCapture = () => {
        const photoBased64 = this.cameraRef.current.getScreenshot();
        this.setState({ capturedStatus: photoBased64 })
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='mt-5 p-4 shadow-sm bg-white'>
                        <Col className="p-2" md={6} sm={12} lg={6} xs={6}>
                            <Webcam
                                ref={this.cameraRef}
                                screenshotFormat='image/jpeg'
                                audio={false}
                                className='w-100 h-75'
                            />
                            <button onClick={this.onCapture} className="mt-2 btn saveBtn"> <FaCamera className='m-3' /> Capture</button>
                        </Col>
                        <Col className="p-2" md={6} sm={12} lg={6} xs={6}>
                            <img className='w-100 h-75' src={this.state.capturedStatus} />
                            <button className="mt-2 btn saveBtn"> <FaSave className='m-3' /> Save</button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
