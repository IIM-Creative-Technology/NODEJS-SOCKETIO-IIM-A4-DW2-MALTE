const Document = require('../models/document');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const mimeTypes = (document, mimeTypes = []) => {
    if(!mimeTypes.includes(document.mimetype)) {
        return false;
    }

    return true;
}

const fileFilter = (req, file, next) => {
    const mimeTypeOk = mimeTypes(file, ['application/pdf']);
    if(!mimeTypeOk) {
        next(new Error('Invalid file type. Only pdf files are allowed.'));
    }

    next(null, true);
}

class DocumentController {

    static async list(req, res)
    {
        const documents = await Document.findAll();
        return res.json(documents);
    }

    static async read(req, res)
    {
        // Check GET params
        if(!req.params.id) {
            return res.status(400).end('Documents id parameter is required');
        }

        // Get documents by id
        const documents = await Document.findByPk(req.params.id);
        if(!documents) {
            return res.status(404).end('Document not found');
        }

        return res.json(documents);
    }

    static async create(req, res) 
    {
        // Check POST params
        if(!req.body.name) {
            return res.status(400).end('Name is required');
        }
        if(!req.body.type) {
            return res.status(400).end('Document type is required');
        }

        // Insert document
        const document = await Document.create({
            name: req.body.name,
            type: req.body.type,
        });

        return res.json(document);
    }

    static async upload(req, res) 
    {
        const dir = 'uploads/';

        // Document storage 
        const storage = multer.diskStorage({
            destination: (req, file, next) => {
                return next(null, dir);
            },
            filename: async (req, file, next) => {
                const extension = file.mimetype == 'application/pdf' ? '.pdf' : false;
                const type = file.mimetype == 'application/pdf' ? 'pdf' : false;
                const name = path.parse(file.originalname).name;

                if(!extension) {
                    return Error;
                }

                // Insert document
                const document = await Document.create({
                    name: name,
                    type: type,
                });

                next(null, document.id + extension);
            }
        });

        // Filters
        const upload = multer({
            storage: storage,
            limits: {
                files: 1,
                fileSize: 1024 * 1024
            },
            fileFilter: fileFilter
        }).single('document');
        
        // Upload document
        upload(req, res, async (err) => {
            if(err || !req.file?.filename) {
                return res.status(500).json('Document parameter is required.');
            }

            const documentId = path.parse(req.file.filename).name;
            const document = await Document.findByPk(documentId);

            return res.status(200).json(document);
        });
    }

    static async download(req, res)
    {
        // Check GET params
        if(!req.params.id) {
            return res.status(400).end('Documents id parameter is required');
        }

        // Get documents by id
        const document = await Document.findByPk(req.params.id);
        if(!document) {
            return res.status(404).end('Document not found');
        }

        const relative = '/../uploads/' + document.id + '.' + document.type;
        res.sendFile(path.resolve(__dirname + relative));
    }

    static async update(req, res)
    {
        // Check GET params
        if(!req.params.id) {
            return res.status(400).end('Document id parameter is required');
        }

        // Get document by id
        const document = await Document.findByPk(req.params.id);
        if(!document) {
            return res.status(404).end('Documents not found');
        }

        // Check POST params
        if(!req.body.name) {
            return res.status(400).end('Name is required');
        }
        if(!req.body.type) {
            return res.status(400).end('Type is required');
        }

        // Update document
        const updateUpload = await Document.update({
            name: req.body.name,
            type: req.body.type
        }, {
            where: {
                id: req.params.id
            }
        });

        if(!updateUpload) {
            return res.status(500).end('An error occured');
        }

        // Get updated document
        const updatedDocument = await Document.findByPk(req.params.id);

        return res.json(updatedDocument);
    }

    static async delete(req, res)
    {
        // Check GET params
        if(!req.params.id) {
            return res.status(400).end('Document id parameter is required');
        }

        // Get document by id
        const documents = await Document.findByPk(req.params.id);
        if(!documents) {
            return res.status(404).end('Document not found');
        }

        // Delete document
        const destroyResult = await Document.destroy({ where: { id: req.params.id } });
        if(!destroyResult) {
            return res.status(500).end('An error occured');
        }

        return res.json(documents);
    }

}

module.exports = DocumentController;