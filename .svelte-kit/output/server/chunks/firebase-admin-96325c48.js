import admin from "firebase-admin";
const type = "service_account";
const project_id = "campark7-54cfc";
const private_key_id = "4325d5c25e820fd74b0ef931e51c5e72cbf6a984";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHXoQEvB/9cEXu\nOiSnRh1IbbltEGqeU5ihFoH+FFlczOJWw9OAs/CunOnuhBilgOE0MmeLq6lT6v1M\nLukDJq/eFpjasj95vmGVaoHqaZ4fITvHDwlMVeTt0F5tuCIiY2P1Km8rF4YyZ0fB\nOv/fyh3rFQgRp9EjMl0jO4AjQS3aHsxBcalGA68q7ONo3qS8aGEiE2LDlvEFrSkN\nCveUEddP+DX3Vq/Qi8yty+zV4F7oNEqqnRrvWiJ07mZ8rZ+ZWt7sRYidgFsRtRBK\nrwL8zASgJg9OnUkgrN+yI0cSBWI4qriR3Ys3Gwz1cvmEK9AGqsycTHJZA4SIo3tg\naFDDrLwHAgMBAAECggEABznOAld6fuTZb41Tl4mO2OtX0RBLMy4nrvL1nCquh5Kt\npvJj5r7CX1Y0sBcy/+0OfHtRoxaQYeu+d66PWVEqlPD+KyTEYkwmh5sYHcN5pZbb\nCxBouiQoYMbUDxkviU4WjIde6qb2yDpTt7j9pQIo0Yvf3u/x3Mzf4r2gf1hjP2+O\nqdWkIv+7uxiFHRw6yqAzG1c3tqLnnlvSzS42usNtaVM+4IUnEOJHxWh5ZwV6Kqme\nk7mbIRPVOKRn900FDp7o5RihlE3ZtYsfqK3ugYmLtK+u5Zh5P9pltnh3MG1L0dDJ\nc803GG5iHgdDcl/VAUQawylIHYYxFvCtgPlsmLDsqQKBgQD1yxx5gHI9nTdjJ5BE\nLudGLuqOjF3D4Ng9bnX4CZU11pcTesh5Zwcg6P5E+zGBA4QBvsL/AZ2Qw6bFu/wt\nLUOA1O/OzJDcHG1AzAd76qlT03vbEUn69PpgfqjvzynWuL7Vf0WoqcGwH3mV4AsN\nKL6zN+8jedgDZfzyokJSuUa4zwKBgQDPpeU4tUckf+FqWzs9SIvJOgecIjM6JP5f\njpfuCqoeIf3L6b+Nl/+lSCaiSUZtvg5CJ3Np1/IgP4BooGXF4Vmf6xDRzbEcEoMV\nfjtDhBwmYILBN7L0wKWj7/LM23iiESCXSLJ7JHXk8xe/we2cMcE/s7gtFKdvgW93\nWbCue52nSQKBgQDwT2wAkweem/aKGCVhtGXj5Xzob+5A07U3oqbuIhhjMfI1Vmdo\n4sVCdOoc8Wb+FzzaI/MsNR0ja1bDnr64QLft3sKzcqfyvExI/PIYQl7ZGTzP+0BU\nf23IKC3tgKMMT0YtIKkvdQFsu+k5EnpbnEmOmZJSIg+DixRa+S9VB9ZQWwKBgAG/\nu/aGUFsWWKe0rQMPIV5Ihtfh0dyjgyD66nyuylAGqUSWa26d4SFbQjgLtfQmragQ\n/P/fOcLbxhEbiL/p7f9S04lw2hUKcuAzd/xRmIsaNP+7oF4/YSXIV5syHgn/au7b\nReWToQqUoZaT45R1NtN6iAqZKe/efznaH4rYr7NBAoGAUPBtJmZ2Ahjtvp6WQqj2\niYeQKePOeMyYa/d+t57iC4SXYSBxiub5zhIRNFNKwogUknWYB47A44Y/A/bOYV5L\nMmPXKpQRlD1eFZBHrhklmy9mBRLJ9NoM4E6grCUt8rHs6NhdKmIY6YV9fZ03uc0O\naoJbiU4b8mOE/gyGyq2u7xM=\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-d5pti@campark7-54cfc.iam.gserviceaccount.com";
const client_id = "103872159917809517700";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d5pti%40campark7-54cfc.iam.gserviceaccount.com";
var firebaseKey = {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url
};
var serviceAccount = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
  "default": firebaseKey
});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
