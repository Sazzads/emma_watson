import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ minHeight: '80vh' }} className='d-flex justify-content-center align-items-center'>
            <div>
                <>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                    </Button>{' '}
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Please Wait...
                    </Button>
                </>
            </div>
        </div>
    );
};

export default Loading;