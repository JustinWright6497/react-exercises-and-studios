export default function BookList() {
   let pageTitle = "New Book Releases";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFjZaDbhPjNPEHHgos3kOlWz5_TZ8fNfAEw&usqp=CAU";
   let book2 = "https://images.csmonitor.com/csmarchives/2010/11/13831001.JPG?alias=standard_900x600";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFn1-migsaqnWRplRu_CuWmblxp4Ruro0HEQ&usqp=CAU";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Breaking Dawn" />
         <img src={book2} alt="Harry Potter and the Deathly Hallows" />
         <img src={book3} alt="The Outsider" />
      </div>      
   );
}