import React from 'react';

const DataList = ({ suggestions }) => {
  let optionList = suggestions.map((suggestion, index) => {
    return <option key={ index }>{ suggestion }</option>
  }).slice(0, 10);
  
  return (
    <datalist id="DataList">
      { optionList }
    </datalist>
  );
};

export default DataList;