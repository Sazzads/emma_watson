import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h1 className='pt-4'>Questions:</h1>
            <Container>
                <Row>
                    <Col lg='2'></Col>
                    <Col lg='8'>
                        <div className='border p-4 text-start my-3'>
                            <h5>1. What Difference between authorization and authentication?</h5>

                            <h5>authorization:</h5>
                            <ul>
                                <li>Authentication confirms the identity of the user.</li>
                                <li>Passwords, one-time pins, biometric information, and other information provided or entered by the user are used for authentication.</li>
                                <li>The first step in a successful identity and access management strategy is authentication.</li>
                                <li>The user can see and alter several aspects of authentication.</li>
                            </ul>
                            <h5>authentication</h5>
                            <ul>
                                <li>What resources a user has access to is determined by authorization.</li>
                                <li>Authorization is controlled by the organization's settings, which it implements and maintains.</li>
                                <li>Authentication is always followed by authorization.</li>
                                <li>The user has no visibility into or control over authorization.</li>
                            </ul>

                        </div>
                        <div className='border p-4 text-start  my-3'>
                            <h5>2. Why are you using firebase? What other options do you have to implement authentication?</h5>

                            <p>
                                Firebase can be thought of as a serverless backend for your mobile, web, and other apps. It is a Google-provided service. In most of my projects as an Android developer, I use Firebase. Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, and more features are included.

                                When you don't want to spend a lot of time constructing your own backend, Firebase is a good option. It can be utilized to develop quickly. I've been using it in my production apps. You won't have to worry about servers or anything else because Google will take care of it for you.

                                Firebase is one of the greatest solutions if you don't need to construct your own backend.
                            </p>
                            <br />
                            <>
                                <p>the most popular alternatives and competitors to Firebase Authentication are:</p>
                                <ul>
                                    <li>Auth0</li>
                                    <li>MongoDB</li>
                                    <li>Passport</li>
                                    <li>Okta</li>
                                </ul>

                            </>
                        </div>
                        <div className='border p-4 text-start  my-3'>
                            <h5>3.What other services does firebase provide other than authentication?</h5>
                            <ul>
                                <li>Cloud Firestore</li>
                                <li>Cloud Storage</li>
                                <li>Cloud Messaging</li>
                                <li>Predictions</li>
                                <li>Cloud Functions</li>
                                <li>Google Analytics</li>
                                <li>Hosting</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg='2'></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog; 