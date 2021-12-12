import React from 'react';

interface IProps {
  images: IImage[]
}
const ImageList: React.FunctionComponent<IProps> = props =>{
  const imageElements = props.images.map((image)=> {
    return <img src ={image.urls.regular} />
  })
  return <div className = "image-list">{imageElements}</div>
  };
 


export default ImageList