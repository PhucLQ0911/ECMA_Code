import HeaderComponent from "../../components/admin/Header";

function InfoAdminPage() {
   return (
      <>
         <HeaderComponent />
         <div className="container mt-32 ">
            <h1 className="text-white text-center">Info Admin</h1>
            <form>
               <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                           <label className="block text-sm font-medium leading-6 text-white">Fullname</label>
                           <div className="mt-2">
                              <input
                                 name="fullname"
                                 type="text"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 "
                              />
                           </div>
                        </div>
                        <div className="sm:col-span-3">
                           <label className="block text-sm font-medium leading-6 text-white">Positions</label>
                           <div className="mt-2">
                              <input
                                 name="positions"
                                 type="text"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 "
                              />
                           </div>
                        </div>
                     </div>
                     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                           <label className="block text-sm font-medium leading-6 text-white">Link CV</label>
                           <div className="mt-2">
                              <input
                                 name="linkCv"
                                 type="text"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 "
                              />
                           </div>
                        </div>
                        <div className="sm:col-span-2">
                           <label className="block text-sm font-medium leading-6 text-white">Link Git</label>
                           <div className="mt-2">
                              <input
                                 name="linkGit"
                                 type="text"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 "
                              />
                           </div>
                        </div>
                        <div className="sm:col-span-2">
                           <label className="block text-sm font-medium leading-6 text-white">Link Fb</label>
                           <div className="mt-2">
                              <input
                                 name="linkFb"
                                 type="text"
                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 "
                              />
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your description</label>
                  <textarea id="message" rows={5} className="block p-2.5 w-full text-sm text-black bg-white rounded-lg border" placeholder="Your description..." defaultValue={""} />
               </div>
               <div className="mt-6 flex items-center justify-center gap-x-6">
                  <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white ">Save</button>
               </div>
            </form>
         </div>
      </>
   );
}
export default InfoAdminPage;
