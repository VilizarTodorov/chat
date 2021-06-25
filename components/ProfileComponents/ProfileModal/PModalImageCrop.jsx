import Slider from "@material-ui/core/Slider";
import React, { useCallback, useState, Fragment } from "react";
import Cropper from "react-easy-crop";

const PModalImageCrop = ({ img }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  return (
    <Fragment>
      <div className="crop-container">
        <Cropper
          image={img}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div className="controls">
        <Slider
          value={zoom}
          min={1}
          max={4}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(zoom)}
          classes={{ root: "slider" }}
        />
      </div>
    </Fragment>
  );
};

export default PModalImageCrop;
