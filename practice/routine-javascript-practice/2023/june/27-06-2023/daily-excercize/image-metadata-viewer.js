let preview = document.getElementById("preview");
let metadataList = document.getElementById("metadata");
let filedataList = document.getElementById('filedata');
const fileDataContainer = document.querySelector('.filedata-container');
const metaDataContainer = document.querySelector('.metadata-container');



function previewImage(event) {
  metadataList.innerHTML = "";
  filedataList.innerHTML = "";
  let file = event.target.files[0];
  let reader = new FileReader();
  let width, height;
  reader.onload = function (event) {
    let img = new Image();
    img.onload = function () {
      // display image size
      let imageSize = this.width + "x" + this.height;
      const label = document.querySelector('.upload-icon');
      label.style.border = 'none';
      label.style.background = 'none';
      label.style.height = "100px";
      addFileDataItem({ title: "Image Size:", value: imageSize });
      addMetaDataItem({ title: "Image Size:", value: imageSize });
    };
    img.src = event.target.result; // set the src attribute of the img element
    preview.src = img.src;
    document.getElementById('download-btn').style.display = 'inline-block';
  };
  reader.readAsDataURL(file);

  // Extract metadata using Exif-JS
  EXIF.getData(file, function () {
    let make = EXIF.getTag(this, "Make");
    let model = EXIF.getTag(this, "Model");
    let dateTime = EXIF.getTag(this, "DateTime");
    let gpsLatitude = EXIF.getTag(this, "GPSLatitude");
    let gpsLongitude = EXIF.getTag(this, "GPSLongitude");
    let gpsAltitude = EXIF.getTag(this, "GPSAltitude");
    let exifVersion = EXIF.getTag(this,"ExifVersion");
    let colorspace = EXIF.getTag(this,"ColorSpace");
    let compressedBitsPerPixel = EXIF.getTag(this,"CompressedBitsPerPixel");
    let exposureTime = EXIF.getTag(this,"ExposureTime");// in seconds
    let flash = EXIF.getTag(this,"Flash");
    let shutterSpeed = EXIF.getTag(this,"ShutterSpeedValue");
    let brightnessValue = EXIF.getTag(this,"BrightnessValue");
    let copyright = EXIF.getTag(this,"Copyright");
    let imageDescription = EXIF.getTag(this,"ImageDescription");
    let orientation = EXIF.getTag(this,"Orientation");
    let sharpness = EXIF.getTag(this,"Sharpness");
    let saturation = EXIF.getTag(this,"Saturation");
    let contrast = EXIF.getTag(this,"Contrast");
    let subjectDistanceRange = EXIF.getTag(this,"SubjectDistanceRange");
    let whiteBalance = EXIF.getTag(this,"WhiteBalance");
    let gainControl = EXIF.getTag(this,"GainControl");
    let sensingMethod = EXIF.getTag(this,"SensingMethod");
    let lightSource = EXIF.getTag(this,"LightSource");
    let resolutionUnit = EXIF.getTag(this,"FocalPlaneResolutionUnit")
    let XResolution = EXIF.getTag(this,"FocalPlaneXResolution");
    let YResolution = EXIF.getTag(this,"FocalPlaneYResolution");
    let fNumber = EXIF.getTag(this,"FNumber");
    EXIF.getTag(this,);
    EXIF.getTag(this,);
    // Display metadata
    metadataList.innerHTML = "";


    // Calculate size in MB
    // add file name
    let fileName = file.name;
    addFileDataItem({ title: "Name: ", value: fileName });
    addMetaDataItem({ title: "Name: ", value: fileName });

    let sizeOfImage = width + 'X' + height;
    let size = file.size / (1024 * 1024);
    if (size < 1) {
      size *= 1024;
      size = size.toFixed(2);
      addFileDataItem({ title: "Size: ", value: size + "KB" });
      addMetaDataItem({ title: "Size: ", value: size + "KB" });
    }
    else {
      size = size.toFixed(2);
      addFileDataItem({ title: "Size: ", value: size + "MB" });
      addMetaDataItem({ title: "Size: ", value: size + "MB" });
    }

    // display MIME type
    let fileType = file.type;
    addFileDataItem({ title: "MIME Type: ", value: fileType });
    addMetaDataItem({ title: "MIME Type: ", value: fileType });


    addMetaDataItem({ title: "Make: ", value: make });
    addMetaDataItem({ title: "Model: ", value: model });
    addMetaDataItem({ title: "Date/Time: ", value: dateTime });
    addMetaDataItem({ title: "GPS latitude: ", value: gpsLatitude });
    addMetaDataItem({ title: "GPS longitude: ", value: gpsLongitude });
    addMetaDataItem({ title: "GPS altitude: ", value: gpsAltitude });
    addMetaDataItem({ title: "EXIF Version: ", value: exifVersion });
    addMetaDataItem({ title: "Color Space: ", value: colorspace });
    addMetaDataItem({ title: "Compressed Bits/Pixel: ", value: compressedBitsPerPixel });
    addMetaDataItem({ title: "Exposure Time(sec): ", value: exposureTime });
    addMetaDataItem({ title: "Flash: ", value: flash });
    addMetaDataItem({ title: "Contrast: ", value: contrast });
    addMetaDataItem({ title: "Brightness: ", value: brightnessValue });
    addMetaDataItem({ title: "Shutter Speed: ", value: shutterSpeed });
    addMetaDataItem({ title: "Gain Control: ", value: gainControl });
    addMetaDataItem({ title: "Sharpness: ", value: sharpness });
    addMetaDataItem({ title: "Orientation: ", value: orientation });
    addMetaDataItem({ title: "Saturation: ", value: saturation });
    addMetaDataItem({ title: "Sensing Method: ", value: sensingMethod });
    addMetaDataItem({ title: "Light Source: ", value: lightSource });
    addMetaDataItem({ title: "White Balance: ", value: whiteBalance });
    addMetaDataItem({ title: "Subject Distance Range: ", value: subjectDistanceRange });
    addMetaDataItem({ title: "Image Description: ", value: imageDescription });
    addMetaDataItem({ title: "Copyright: ", value: copyright });
    addMetaDataItem({ title: "Resolution Unit: ", value: resolutionUnit });
    addMetaDataItem({ title: "X-Resolution: ", value: XResolution });
    addMetaDataItem({ title: "Y-Resolution: ", value: YResolution });
    addMetaDataItem({ title: "F-Number: ", value: fNumber });
    fileDataContainer.style.display = "block";
    metaDataContainer.style.display = "block";
  });
}

const addFileDataItem = (item) => {
  let newItem = document.createElement('tr');
  newItem.innerHTML = "<td>" + item.title + "</td>" + "<td>" + item.value + "</td>";
  filedataList.appendChild(newItem);
}

const addMetaDataItem = (item) => {
  let newItem = document.createElement('tr');
  newItem.innerHTML = "<td>" + item.title + "</td>" + "<td>" + item.value + "</td>";
  metadataList.appendChild(newItem);
}

