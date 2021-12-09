import React from 'react';

interface IProps {
  images: IImage[]
}
const ImageList: React.FunctionComponent<IProps> = props =>{
  console.log(props.images)
  return <div className = "image-list">{imageElements}</div>
  };
 


export default ImageList