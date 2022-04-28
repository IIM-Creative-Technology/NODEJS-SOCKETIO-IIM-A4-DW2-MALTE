const bcrypt = require('bcrypt');
const Document = require('../models/document');

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
            return res.status(400).end('name is required');
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