const defaultFilters = [ 
	"*://*.grabify.link/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

# New Domains Coming Soon
