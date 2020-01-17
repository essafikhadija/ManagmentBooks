import {HttpException, HttpStatus} from '@nestjs/common';

export class NotAuthorisedPriceException extends HttpException {

    constructor() {
        super('le prix est trop élevé', HttpStatus.BAD_REQUEST);
    }

}
