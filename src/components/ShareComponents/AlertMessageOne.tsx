//This is a simple component that shows a quick alert with a small close x in it.
//useful for showing some quick pop up text. 

//Alert.tsx

import React, { FC, useState } from 'react';
import { Alert } from 'reactstrap';
interface AlertProps {

    alertmessage?: string

}

const AlertMessageOne: FC<AlertProps> = ({ alertmessage }: AlertProps) => {

    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return <div>

        <Alert color="info" isOpen={visible} toggle={onDismiss}>
            {alertmessage}
    </Alert>

    </div>;

}

export default AlertMessageOne;