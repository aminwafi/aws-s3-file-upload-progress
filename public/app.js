var bucket = new AWS.S3({
  accessKeyId: "AWS_ACCESS_KEY_ID",
  secretAccessKey: "AWS_SECRET_ACCESS_KEY",
  region: "AWS_REGION"
});

function uploadFile(fileName, file, folderName) {
  const params = {
    Bucket: "BUCKET_NAME",
    Key: folderName + fileName,
    Body: file,
    ContentType: file.type
  };
  return bucket.upload(params, function(err, data) {

  if (err) {
    console.log('There was an error uploading your file: ', err);
    return false;
  }
    console.log('Successfully uploaded file.', data);
    return true;
  });
}

function uploadSampleFile() {
  var progressDiv = document.getElementById("myProgress");
  progressDiv.style.display="block";
  var progressBar = document.getElementById("myBar");
  file = document.getElementById("myFile").files[0];
  folderName = "Document/";
  uniqueFileName = 'SampleFile'; 
  let fileUpload = {
  id: "",
  name: file.name,
  nameUpload: uniqueFileName,
  size: file.size,
  type: "",
  timeReference: 'Unknown',
  progressStatus: 0,
  displayName: file.name,
  status: 'Uploading..',
  }
  uploadfile(uniqueFileName, file, folderName)
  .on('httpUploadProgress', function(progress) {
    let progressPercentage = Math.round(progress.loaded / progress.total * 100);
    console.log(progressPercentage);
    progressBar.style.width = progressPercentage + "%";
    if (progressPercentage < 100) {
    fileUpload.progressStatus = progressPercentage;

    } else if (progressPercentage == 100) {
    fileUpload.progressStatus = progressPercentage;

    fileUpload.status = "Uploaded";
  }
  })
}