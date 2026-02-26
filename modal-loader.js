/**
 * modal-loader.js
 * Injects the project modal into every page and wires up open/close logic.
 * Works with file:// (no server needed).
 */
(function () {
  const modalHTML = `
    <div id="projectModal" class="modal" aria-hidden="true">
      <div class="modal-overlay" data-close="true"></div>

      <div class="pr-modal-panel" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">
        <button class="modal-close" type="button" aria-label="Close" data-close="true">×</button>

        <div class="modal-grid">
          <div class="modal-cols">
            <div class="modal-col">
              <h3>BUSINESS</h3>
              <ul>
                <li><a href="nbpc.html" class="modal-list">2020 National Business Plan Competition (NBPC)</a></li>
                <li><a href="ccbi.html" class="modal-list">2021 Community College Business Invitation</a></li>
              </ul>
            </div>

            <div class="modal-col">
              <h3>TRANSFER</h3>
              <ul>
                <li><a href="tsps.html" class="modal-list">2020 Transfer Student Panel Series (TSPS)</a></li>
                <li><a href="" class="modal-list">International Alumni Network (IAN)</a></li>
                <li><a href="oau.html" class="modal-list">Opportunities at Universities (OAU)</a></li>
              </ul>
            </div>

            <div class="modal-col">
              <h3>SOCIAL SCIENCE</h3>
              <ul>
                <li><a href="crc.html" class="modal-list">2021 Creative Research Challenge (CRC)</a></li>
              </ul>
            </div>

            <div class="modal-col">
              <h3>STEM</h3>
            </div>

            <div class="modal-col">
              <h3>ART &amp; HUMANITIES</h3>
            </div>

            <div class="modal-col">
              <h3>INTERNSHIP</h3>
              <ul>
                <li><a href="cips.html" class="modal-list">Career &amp; Internship Preparation Seminar (CIPS)</a></li>
                <li><a href="iaas.html" class="modal-list">Intern-At-Startups (IAAS)</a></li>
              </ul>
            </div>

            <div class="modal-col">
              <h3>VOLUNTEER</h3>
              <ul>
                <li><a href="" class="modal-list">Volunteer Database</a></li>
                <li><a href="" class="modal-list">Community Service Awards (CSA)</a></li>
              </ul>
            </div>

            <div class="modal-col">
              <h3>GENERAL</h3>
              <ul>
                <li><a href="" class="modal-list">College Leap General Resource Database</a></li>
                <li><a href="" class="modal-list">College Forum</a></li>
                <li><a href="" class="modal-list">Group</a></li>
                <li><a href="" class="modal-list">Campus Resources Guide</a></li>
                <li><a href="" class="modal-list">Transfer Blog</a></li>
              </ul>
            </div>
          </div>

          <aside class="modal-side modal-col">
            <a class="modal-btn" href="chapters.html">Become A Project Associate</a>
          </aside>
        </div>
      </div>
    </div>
  `;

  // Inject modal into page
  const container = document.createElement('div');
  container.innerHTML = modalHTML;
  document.body.appendChild(container);

  // Wire up open/close
  const modal  = document.getElementById('projectModal');
  const openBtn = document.getElementById('openProjectModal');

  function open() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', function (e) {
      e.preventDefault();
      open();
    });
  }

  modal.addEventListener('click', function (e) {
    if (e.target?.dataset?.close === 'true') close();
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
})();