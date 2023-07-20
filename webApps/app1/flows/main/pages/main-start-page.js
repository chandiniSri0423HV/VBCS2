define([], () => {
  'use strict';

 var PageModule= function PageModule() {};
 PageModule.prototype.getSearchQueryPrameter = function (employeeSearchCriteria, salarySearchCriteria){
   let queryParam='';
   if(employeeSearchCriteria !== undefined && employeeSearchCriteria!==null && employeeSearchCriteria!=='' ){
     queryParam+="id LIKE '%"+employeeSearchCriteria+"%'";
   }
   if(salarySearchCriteria!==undefined && salarySearchCriteria!==null && salarySearchCriteria>0){
     if(queryParam==""){
       queryParam+="salary < "+salarySearchCriteria;
     }
     else{
       queryParam+="and salary < "+salarySearchCriteria;
     }
   }
   if(queryParam==""){
     return "id LIKE '%%'";
   }
   return queryParam;
 };

  return PageModule;
});
