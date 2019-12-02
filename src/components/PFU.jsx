import React  from 'react';
import ReactS3 from 'react-s3'

const config = {
    bucketName: 'testerbuckettt',
    dirName: 'photos', /* optional */
    region: 'eu-west-1',
    accessKeyId: '',
    secretAccessKey: '',
}

class PFU extends React.Component {
    constructor(){
        super();
    }
    upload(e){
        var ok = new ReactS3();
        console.log(ok)
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