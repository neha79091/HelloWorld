import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value:string):any {
   if(!value) return null;
   let words=value.split(' ');
   let prepositions=['of',"in","on","about","under","for"];
   for(var index=0;index<words.length;index++ )
   {
       if (!prepositions.includes(words[index].toLowerCase()))
       {
         words[index]=words[index].substring(0,1).toUpperCase()+words[index].substring(1).toLowerCase();
       }
       else if(index==0 && (prepositions.includes(words[index].toLowerCase())) )
       { words[index]=words[index].substring(0,1).toUpperCase()+words[index].substring(1).toLowerCase();}
       else
       {words[index]=words[index].toLowerCase();}
   }
   return words.join(' ');
  }

}
