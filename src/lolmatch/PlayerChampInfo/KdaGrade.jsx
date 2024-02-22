import React from "react";

const KdaGrade = ({kill ,death, assist}) => {
    let kda = ((kill + assist)/death).toFixed(2);

    return (
        <div>
            <p>{kill}/{death}/{assist}</p>
            <p>{kda}</p>
        </div>
    );
};

export default KdaGrade;