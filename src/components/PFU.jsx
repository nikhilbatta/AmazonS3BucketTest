import React  from 'react';
import ReactS3 from 'react-s3'

const config = {
    bucketName: 'testerbuckettt',
    accessKeyId: '',
    region: 'us-west-2',
    secretAccessKey: '',
}

class PFU extends React.Component {
    constructor(){
        super();
    }
    upload(e){
        var ok = new ReactS3();
        console.log(ok)
        console.log(e.target.files[0])
        ReactS3.uploadFile(e.target.files[0], config)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render(){
        return (
            <div>
                <input type="file" onChange={this.upload}>
                </input>
            </div>
        )
    }
}
export default PFU;