import React from 'react';
import { Image } from 'react-bootstrap';
import noImage from '../asset/icons/no_image.png'

var styles = {
    marginRight: "4px",
    width: 50,
    height: 50,
    resizeMode: 'contain' };


export const UserOverView: React.FC = () => {
    return (
        <div className="d-flex flex-row" style={{ margin: "8px"}}>
            <Image src={noImage} roundedCircle alt="logo" style={styles} />
            <div>
                <div style={{ fontSize: "15px"}}>Name</div>
                <div style={{ fontSize: "12px"}}>Skill1 / Skill2/ Skill3/ Skill4 / Skill5</div>
            </div>
        </div>
    );
}