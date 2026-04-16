const { S3Client } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
    region: "ap-southeast-2",
    credentials: {
        accessKeyId: "AKIAW7KMJNCRVKGI3KM",
        secretAccessKey: "ZlKTCUQ++hdSaeu2OM5ZrD4W+BG8NNHP31WV6U0m"
    }
});

module.exports = s3;