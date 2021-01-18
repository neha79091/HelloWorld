import {Pipe ,PipeTransform } from '@angular/core';

@Pipe
({
    name:'summary'
    })

export class SummaryPipe implements PipeTransform
{
    transform(value:any,limit?:number)
    {
        let ActualLimit=(limit)?(limit):50;
        if(!value)
        return null;
        return value.substr(0,ActualLimit)+'....';
    }
}