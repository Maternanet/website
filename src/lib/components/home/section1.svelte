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
<section class="position-relative overflow-hidden pt-lg-6 py-4 pb-lg-7">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col text-center">
                <span class="badge rounded-pill badge-soft-primary px-2 py-1"> Meet Medilyne </span>
                <h1 class=" font-weight-900"> Good medical care starts with good data </h1>
                <h5 class="fw-normal mx-auto mt-0 pb-2">
                    Maternanet is the only app available in Africa that enables you to access, <br> 

                    aggregate and share your healthcare data with the people and organizations you trust



                    
                </h5>
            </div>
        </div>

        <div class="row pt-5 align-items-center features-3">
            <div class="col-lg-6">
                <div class="img-content position-relative">
                    <div class="img-up mb-lg-0 mb-6">
                        <img src="/imgs/home/s2.png" alt="app img" class="img-fluid d-block rounded aos-init aos-animate" data-aos="fade-right" data-aos-duration="200">
                    </div>
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1">
                <div class="accordion aos-init aos-animate" id="features-list" data-aos="fade-up" data-aos-duration="300">
                    <div class="d-flex border-bottom pb-4" on:keydown={()=>{}} on:click={()=>update(0)}>
                        <span class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z" fill="#035A4B"></path>
                            </svg>
                            
                        </span>                            
                        <div class="flex-grow-1">
                            <a href="#" class="text-dark h4 {data[0]?"":"collapsed"}">
                                All your health in one place
                            </a>

                            <div class="collapse {data[0]?"show":""}" id="feature1ex" data-bs-parent="#features-list" style="">
                                <p class=" mt-1 mb-4">
                                    Get treated for a range of symptoms & conditions right from your smartphone.
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
                                Chat with your health team.

                            </a>

                            <div class="collapse {data[1]?"show":""}" id="feature2ex" data-bs-parent="#features-list" style="">
                                <p class=" mt-1 mb-4">
                                    Get treated for a range of symptoms & conditions right from your smartphone.
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
                            <a href="#" class="text-dark h4 {data[2]?"":"collapsed"}" > Book same day appointments </a>

                            <div class="collapse {data[2]?"show":""}" id="feature2ex" data-bs-parent="#features-list" style="">
                                <p class=" mt-1 mb-4">
                                    Primary, urgent, and virtual care visits on YOUR schedule.
                                </p>
                                <a href="#" class="h6 text-primary pt-3 d-flex ">Learn more <i class="ri-arrow-right-line align-self-center mx-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex pt-4" on:keydown={()=>{}} on:click={()=>update(3)}>
                        <span class="bg-soft-orange avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-orange me-3 flex-shrink-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="#035A4B"></path>
                                <path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="#035A4B"></path>
                            </svg>
                            
                        </span>
                        <div class="flex-grow-1">
                            <a href="#" class="text-dark h4 {data[3]?"":"collapsed"}" >
                              Improved Care Coordination
                            </a>

                            <div class="collapse  {data[3]?"show":""}" id="feature3ex" data-bs-parent="#features-list" style="">
                                <p class=" mt-1 mb-4">
                                    We help you organize your important health information for you and your family in one easy and secure place 


                                </p>
                                <a href="#" class="h6 text-primary pt-3 d-flex ">Learn more <i class="ri-arrow-right-line align-self-center mx-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="position-relative overflow-hidden py-7 features-3">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <div class="mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                    <span class="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 mb-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 17C16.4183 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 7.58172 17 12 17Z" fill="#035A4B"></path>
                            <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.53819 9L10.568 19.3624L11.976 18.8149L13.3745 19.3674L17.4703 9H6.53819ZM9.46188 11H14.5298L11.9759 17.4645L9.46188 11Z" fill="#035A4B"></path>
                            <path opacity="0.3" d="M10 22H14V22C14 23.1046 13.1046 24 12 24V24C10.8954 24 10 23.1046 10 22V22Z" fill="#035A4B"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C8.44772 18 8 17.5523 8 17Z" fill="#035A4B"></path>
                        </svg>
                        
                    </span>
                    <h3 class="text-dark">Search for your records in record time </h3>
                    <h6 class=" fw-medium  my-4">
                        Streamline finding your medical records with the largest Facility network. 
                        You get instant access to the majority of healthcare facilities with Medilyne API.
                    </h6>
                    <div class="d-grid gap-3">
                        <!-- Info Block -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <span class="svg-icon svg-icon-sm text-primary">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="#035A4B"></path>
                              <path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="#035A4B"></path>
                              </svg>
      
                            </span>
                          </div>
      
                          <div class="flex-grow-1 ms-4">
                            <h5>Use your secure portal logins</h5>
                            <p>Directly connect to your provider’s patient portal with your private credentials</p>
                          </div>
                        </div>
                        <!-- End Info Block -->
      
                        <!-- Info Block -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <span class="svg-icon svg-icon-sm text-primary">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M15 19.5229C15 20.265 15.9624 20.5564 16.374 19.9389L22.2227 11.166C22.5549 10.6676 22.1976 10 21.5986 10H17V4.47708C17 3.73503 16.0376 3.44363 15.626 4.06106L9.77735 12.834C9.44507 13.3324 9.80237 14 10.4014 14H15V19.5229Z" fill="#035A4B"></path>
                              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 5.67157 3.67157 5 4.5 5H9.5C10.3284 5 11 5.67157 11 6.5C11 7.32843 10.3284 8 9.5 8H4.5C3.67157 8 3 7.32843 3 6.5ZM3 18.5C3 17.6716 3.67157 17 4.5 17H9.5C10.3284 17 11 17.6716 11 18.5C11 19.3284 10.3284 20 9.5 20H4.5C3.67157 20 3 19.3284 3 18.5ZM2.5 11C1.67157 11 1 11.6716 1 12.5C1 13.3284 1.67157 14 2.5 14H6.5C7.32843 14 8 13.3284 8 12.5C8 11.6716 7.32843 11 6.5 11H2.5Z" fill="#035A4B"></path>
                              </svg>
      
                            </span>
                          </div>
      
                          <div class="flex-grow-1 ms-4">
                            <h5>No portal, no problem </h5>
                            <p>Verifying your identity remotely and we'll help you search our  Networks </p>
                          </div>
                        </div>
                        <!-- End Info Block -->
                      </div>
                    <a href="#" class="h6 text-primary pt-3 d-flex ">Learn more <i class="ri-arrow-right-line align-self-center mx-2"></i></a>
                </div>
            </div>

            <div class="col-lg-6 offset-lg-1">
                <div class="img-content2 position-relative">
                    <div class="img-up">
                        <img src="/imgs/home/m2.png" alt="app img" class="img-fluid d-block rounded aos-init aos-animate" data-aos="fade-left" data-aos-duration="300">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>