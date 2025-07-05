var selectedTags = ['all'];
var currentYear = 'all';
var currentFirst = 'all';
var currentVenue = 'all';

function filterByTag(tag, btn) {
  if (tag === 'all') {
    selectedTags = ['all'];
    document.querySelectorAll('.tag-link').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
  } else {
    // Remove 'all' if another tag is selected
    if (selectedTags.includes('all')) {
      selectedTags = [];
      document.querySelector('.tag-link.tag-all').classList.remove('active');
    }
    // Toggle tag
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter(t => t !== tag);
      btn.classList.remove('active');
    } else {
      selectedTags.push(tag);
      btn.classList.add('active');
    }
    // If none selected, revert to 'all'
    if (selectedTags.length === 0) {
      selectedTags = ['all'];
      document.querySelector('.tag-link.tag-all').classList.add('active');
    }
  }
  filterCombined();
}

function filterByYear(year, btn) {
  currentYear = year;
  document.querySelectorAll('.year-link').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  filterCombined();
}

function filterByFirst(first, btn) {
  currentFirst = first;
  document.querySelectorAll('.first-link').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  filterCombined();
}

function filterByVenue(venue, btn) {
  currentVenue = venue;
  document.querySelectorAll('.venue-link').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  filterCombined();
}

function filterCombined() {
  var items = document.querySelectorAll('.pub-oneline');
  items.forEach(function(item) {
    var tags = item.getAttribute('data-tags');
    var year = item.querySelector('.pub-venue em') ? item.querySelector('.pub-venue em').textContent.match(/\d{4}/) : null;
    year = year ? year[0] : '';
    var venue = item.querySelector('.pub-venue em') ? item.querySelector('.pub-venue em').textContent.toLowerCase() : '';
    var tagMatch = (selectedTags.includes('all') || selectedTags.every(function(t) { return tags.includes(t); }));
    var yearMatch = (currentYear === 'all' || year === currentYear);
    var firstMatch = (currentFirst === 'all' || (currentFirst === 'first-author' && tags.includes('first-author')));
    var venueMatch = (currentVenue === 'all' || 
                     (currentVenue === 'acl' && venue.includes('acl') && !venue.includes('naacl')) ||
                     (currentVenue === 'naacl' && venue.includes('naacl')) ||
                     (currentVenue === 'emnlp' && venue.includes('emnlp')) ||
                     (currentVenue === 'sigir' && venue.includes('sigir') && !venue.includes('sigir-ap')) ||
                     (currentVenue === 'cikm' && venue.includes('cikm')) ||
                     (currentVenue === 'neurips' && venue.includes('neurips')) ||
                     (currentVenue === 'journal' && (venue.includes('tois') || venue.includes('tmlr'))) ||
                     (currentVenue === 'arxiv' && venue.includes('arxiv')) ||
                     (currentVenue === 'others' && !venue.includes('acl') && !venue.includes('naacl') && !venue.includes('emnlp') && !venue.includes('sigir') && !venue.includes('cikm') && !venue.includes('neurips') && !venue.includes('tois') && !venue.includes('tmlr') && !venue.includes('arxiv') || venue.includes('sigir-ap')));
    if (tagMatch && yearMatch && firstMatch && venueMatch) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
} 