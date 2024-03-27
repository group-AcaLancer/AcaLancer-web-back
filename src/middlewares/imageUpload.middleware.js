import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '../../public'),
    filename: (req, file, cb) => {
      const date = Date.now();
      cb(null, `${date}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 2000 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if(!file.mimetype.includes('image')) {
      return cb({
        status: 400,
        error: "File not accepted",
        message: "Only images files are allowed",
      })
    }
    cb(null, true);
  }
});

export default upload;