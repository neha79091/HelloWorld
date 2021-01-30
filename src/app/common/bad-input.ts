import { AppError } from './app-error';
export class BadInput extends AppError
{
    handleError(error)
        {
            alert('Error 400 occurred');
            console.log(error)
        }
}