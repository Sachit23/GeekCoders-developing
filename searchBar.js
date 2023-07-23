var searchContext = document.querySelector("#search-navbar");
  
searchContext.addEventListener("keypress",function(event) {
    if(event.key === "Enter") {
       let value = searchContext.value.toLowerCase();
       if(value === 'array') {
        window.location.href = "http://127.0.0.1:5500/arrayPractice/index.html";
       } 
       else if(value==='string') {
        window.location.href = "http://127.0.0.1:5500/stringPractice/index.html";
       } 
       else if(value==='binary search') {
        window.location.href = "http://127.0.0.1:5500/binarySearchPractice/index.html";
       } 
       else if(value==='linked list') {
        window.location.href = "http://127.0.0.1:5500/linkedlistPractice/index.html";
       } 
       else if(value==='stack') {
        window.location.href = "http://127.0.0.1:5500/stackPractice/index.html";
       } 
       else if(value==='queue') {
        window.location.href = "http://127.0.0.1:5500/queuePractice/index.html";
       } 
       else if(value==='sorting') {
        window.location.href = "http://127.0.0.1:5500/sortingPractice/index.html";
       } 
       else if(value==='tree') {
        window.location.href = "http://127.0.0.1:5500/treePractice/index.html";
       } 
       else if(value==='graph') {
        window.location.href = "http://127.0.0.1:5500/graphPractice/index.html";
       } 
       else if(value==='recursion') {
        window.location.href = "http://127.0.0.1:5500/recursionPractice/index.html";
       } 
       else if(value==='dynamic programming') {
        window.location.href = "http://127.0.0.1:5500/dynamicPractice/index.html";
       } 
       else if(value==='amazon') {
        window.location.href = "http://127.0.0.1:5500/amazonPractice/index.html";
       } 
       else if(value==='facebook') {
        window.location.href = "http://127.0.0.1:5500/metaPractice/index.html";
       } 
       else if(value==='google') {
        window.location.href = "http://127.0.0.1:5500/googlePractice/index.html";
       } 
       else if(value === 'netflix'){
        window.location.href = "http://127.0.0.1:5500/netflixPractice/index.html";
       }
        
       


    }
})  