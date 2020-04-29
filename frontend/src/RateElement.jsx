import React from 'react';
//material icons
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const RateElement = (props) => {
    function createStarIcons(count) {
        let stars = [];
        console.log("createStarIcons: " + count)
        for(let i = 0; i< count;i++){
            stars.push(<StarIcon key={"StarIcon"+i}/>);
        }
        return (stars);
    }
    function createStarBorderIcons(count) {
        console.log("createStarBorderIcons: " + count)
        let stars = [];
        for(let i = 0; i< count;i++){
            stars.push(<StarBorderIcon key={"StarBorderIcon"+i}/>);
        }
        return (stars);
    }
    function showRate() {
        if(!props.rates) {
            return (
                <div className="rate">
                    {createStarBorderIcons(5)}
                </div>
            );
        }
        var currentRate = 0;
        console.log(props.rates)
        for(var i = 0; i < props.rates.length; i++) {
        currentRate += props.rates[i].Rate;
        if(props.rates[i].User === "ThisUser"){
            return (
                <div className="rate">
                    <span>
                        {createStarIcons(props.rates[i].Rate)}
                    </span>
                    {createStarBorderIcons(5 - props.rates[i].Rate)}
                </div>
            );
        }
        }
        currentRate /= props.rates.length;
        return (
            <div className="rate">
                {createStarIcons(Math.round(currentRate))}
                {createStarBorderIcons(5 - Math.round(currentRate))}
            </div>
        );
    }
    
    return (
        <div className="rate">
            {showRate()}
        </div>
    );
}

export default RateElement;