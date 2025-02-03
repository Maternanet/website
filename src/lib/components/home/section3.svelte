<script lang="ts">
    var data = [false, false, false, false, false, ];

    const update = (index:number) =>{
        if(data[index] == true){
            data[index] =false;
            return
        }
        data = [false, false, false, false, false, ];
        data[index] =true;


    }
</script>

<div class="position-relative">
    <div class="container">
      <div class="row justify-content-end align-items-md-center">
        <div class="d-none d-md-block col-md-4 position-absolute top-0 start-0 bg-img-center h-100" style="background-image: url(https://htmlstream.com/preview/space-v2.3.1/assets/img/900x700/img7.jpg);"></div>
        <div class="d-md-none mb-5 mb-md-0">
          <img class="img-fluid" src="https://htmlstream.com/preview/space-v2.3.1/assets/img/900x700/img7.jpg" alt="Image Description">
        </div>
  
        <div class="col-md-8">
          <div class="p-md-5 p-lg-7">
            <!-- Heading -->
            <div class="mb-4 mb-sm-7">
              <span class="text-cap">YOUR SMART HEALTH LOCKER </span>
              <h3>We’re Here to Take the Complexity Out of Healthcare</h3>
              <p>An all-encompassing digital health platform that makes healthcare convenient – Organize your medical records, share information seamlessly and better understand the status of your health</p>
            </div>
            <!-- End Heading -->
  
            <div class="d-grid gap-3 mb-5">
                <div class="accordion aos-init aos-animate" id="features-list" data-aos="fade-up" data-aos-duration="300">
                    <div class="d-flex border-bottom pb-4" on:keydown={()=>{}} on:click={()=>update(0)}>
                        <span class="bg-soft-success avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z" fill="#035A4B"></path>
                            </svg>
                            
                        </span>                            
                        <div class="flex-grow-1">
                            <a href="#" class="text-dark h4 {data[0]?"":"collapsed"}">
                                Get your Health data on demand
                            </a>

                            <div class="collapse {data[0]?"show":""}" id="feature1ex" data-bs-parent="#features-list" style="">
                                <p class=" mt-1 mb-4">
                                    Streamline care and emergency preparedness with on-demand health data sharing.
                                </p>
                                <a href="#" class="h6 text-primary pt-3 d-flex ">Learn more <i class="ri-arrow-right-line align-self-center mx-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex border-bottom py-4" on:keydown={()=>{}} on:click={()=>update(1)}>
                        <span class="bg-soft-success avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183 5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z" fill="#035A4B"></path>
                                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z" fill="#035A4B"></path>
                            </svg>
                            
                        </span>
                        <div class="flex-grow-1">
                            <a href="#" class="text-dark h4 {data[1]?"":"collapsed"}"  role="button" >
                                Informed decision making for critical care

                            </a>

                            <div class="collapse {data[1]?"show":""}" id="feature2ex" data-bs-parent="#features-list" style="">
                                <p class=" mt-1 mb-4">
                                    Get second opinions faster & make informed healthcare decisions even during crucial times.
                                </p>
                                <a href="#" class="h6 text-primary pt-3 d-flex ">Learn more <i class="ri-arrow-right-line align-self-center mx-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex border-bottom py-4" on:keydown={()=>{}} on:click={()=>update(2)}>
                        <span class="bg-soft-success avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-success me-3 flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="#035A4B"></path>
                                <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="#035A4B"></path>
                                <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="#035A4B"></path>
                            </svg>
                            
                        </span>
                        <div class="flex-grow-1">
                            <a href="#" class="text-dark h4 {data[2]?"":"collapsed"}" > Detailed health profile at your fingertips </a>

                            <div class="collapse {data[2]?"show":""}" id="feature2ex" data-bs-parent="#features-list" style="">
                                <p class=" mt-1 mb-4">
                                    Access & manage your profile from the phone for a complete, easy-to-use health overview.
                                </p>
                                <a href="#" class="h6 text-primary pt-3 d-flex ">Learn more <i class="ri-arrow-right-line align-self-center mx-2"></i></a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
  
            
            <!-- End Row -->
  
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Row -->
    </div>
</div>
  