<div class="bg-soft-danger-light">
  <div class="container content-space-1 content-space-md-3">
    <div class="row">
      <div class="col-md-5 col-lg-6 mb-5 mb-lg-0">
        <h3>Let’s talk Healthcare</h3>
        <p class="fs-6">
          Sign up for our newsletter to get curated news and updates about whats
          happening in healthcare.
        </p>
      </div>
      <!-- End Col -->

      <div class="col-md-7 col-lg-6">
        <form>
          <!-- Input Card -->
          <div class="input-card input-card-sm mb-3">
            <div class="input-card-form">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Your business email"
                aria-label="Your business email"
              />
            </div>
            <button type="button" class="btn btn-primary btn-lg"
              >Request a demo</button
            >
          </div>
          <!-- End Input Card -->
        </form>

        <a class="link" href="https://app.medilyne.com/">Create a free account <i class="bi-chevron-right small ms-1"></i></a
        >
      </div>
      <!-- End Col -->
    </div>
    <!-- End Row -->
  </div>
</div>

<style>
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    color: #00221c;
  }
  h3 {
    font-size: calc(1.3375rem + 1.05vw);
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 2.125rem;
    }
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .small {
    font-size: 0.875em;
  }

  .mb-3 {
    margin-bottom: 1rem !important;
  }
  .mb-5 {
    margin-bottom: 2rem !important;
  }
  .ms-1 {
    margin-left: 0.25rem !important;
  }
  .fs-6 {
    font-size: 1.125rem !important;
  }
  .content-space-1 {
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .input-card {
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
    padding: 0.75rem 0.75rem;
    box-shadow: 0 0.375rem 1.5rem 0 rgba(140, 152, 164, 0.125);
    border-radius: 0.3125rem;
  }
  .input-card .input-card-form {
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
  }
  .input-card .btn {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  .input-card .form-control {
    border-width: 0;
  }
  .input-card .form-control:focus {
    box-shadow: none;
  }
  .input-card .input-card-form {
    position: relative;
  }
  .input-card .input-card-form:not(:last-child) {
    padding-right: 1rem;
  }
  @media (max-width: 575.98px) {
    .input-card-sm {
      display: grid;
    }
    .input-card-sm .btn,
    .input-card-sm .input-card-form {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
    }
    .input-card-sm .input-card-form {
      padding: 1rem 0 !important;
      border-bottom: 0.0625rem solid rgba(0, 34, 28, 0.1);
    }
    .input-card-sm .input-card-form:first-child {
      padding-top: 0 !important;
    }
  }
  .link {
    font-weight: 500;
  }
</style>
