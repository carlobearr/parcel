const { disconnect } = require('mongoose');
const addressController = require('../controllers/addressController');
const mockRequest = require('./mockRequest');
const mockResponse = require('./mockResponse');


beforeAll(() => {
    const connection = require('../db');
    connection();

    //for remote db delay
    jest.setTimeout(30000);
});

describe('Address Controller Functions', () => {
    const address = {
        addressName: 'Jest Test',
        completeAddress: 'Parcel, Backend, Jest, Test',
        details: 'Testing new valid'
    }

    it('Creating a new address with valid details returns a message "saved"', async() => {
        const response = mockResponse();
        await addressController.createAddress(mockRequest({ gId: 'jestID' }, address), response);
        expect(response.json).toHaveBeenCalledWith({ message: "saved" });
    });

    it('Creating a duplicate address returns a message "duplicate"', async() => {
        const response = mockResponse();
        await addressController.createAddress(mockRequest({ gId: 'jestID' }, address), response);
        expect(response.json).toHaveBeenCalledWith({ message: "duplicate" });
    });

    it('Successfully editing an address returns a message "updated"', async() => {
        const editAddress = {
            addressName: 'Edited Jest Test',
            completeAddress: 'Parcel, Backend, Jest, Test',
            details: 'This was edited'
        }

        const response = mockResponse();
        await addressController.editAddress(mockRequest({ gId: 'jestID' }, editAddress, { prevAddressName: 'Jest Test' }), response);
        expect(response.json).toHaveBeenCalledWith({ message: "updated" });
    });

    it('Successfully retrieving an address should return the address', async() => {
        const editAddress = {
            addressName: 'Edited Jest Test',
            completeAddress: 'Parcel, Backend, Jest, Test',
            details: 'This was edited'
        }
        const response = mockResponse();
        await addressController.getAddress(mockRequest({ gId: 'jestID' }, {}, { addressName: 'Edited Jest Test' }), response);
        expect(response.json).not.toHaveBeenCalledWith({ message: "error" });
    });

    it('Retrieving an invalid address should return a message "error"', async() => {
        const response = mockResponse();
        await addressController.getAddress(mockRequest({ gId: 'jestID' }, {}, { addressName: 'Jest Test' }), response);
        expect(response.json).toHaveBeenCalledWith({ message: "error" });
    });

    it('Successfully deleting an address returns a message "deleted"', async() => {
        const response = mockResponse();
        await addressController.deleteAddress(mockRequest({ gId: 'jestID' }, {}, { addressName: 'Edited Jest Test' }), response);
        expect(response.json).toHaveBeenCalledWith({ message: "deleted" });
    });
});

afterAll(() => {
    disconnect();
});