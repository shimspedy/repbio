
const africaSubContent = [
    { 'code': '002', 'name': 'Africa', 'type': 'continent' },
    { 'code': '015', 'name': 'Northern Africa', 'type': 'subcontinent' },
    { 'code': '011', 'name': 'Western Africa', 'type': 'subcontinent' },
    { 'code': '017', 'name': 'Middle Africa', 'type': 'subcontinent' },
    { 'code': '014', 'name': 'Eastern Africa', 'type': 'subcontinent' },
    { 'code': '018', 'name': 'Southern Africa', 'type': 'subcontinent' }
]
const AmericasSubContent = [
    { 'code': '019', 'name': 'Americas', 'type': 'continent' },
    { 'code': '021', 'name': 'Northern America', 'type': 'subcontinent' },
    { 'code': '029', 'name': 'Caribbean', 'type': 'subcontinent' },
    { 'code': '013', 'name': 'Central America', 'type': 'subcontinent' },
    { 'code': '005', 'name': 'South America', 'type': 'subcontinent' }
]
const AsiaSubContent = [
    { 'code': '142', 'name': 'Asia', 'type': 'continent' },
    { 'code': '143', 'name': 'Central Asia', 'type': 'subcontinent' },
    { 'code': '030', 'name': 'Eastern Asia', 'type': 'subcontinent' },
    { 'code': '034', 'name': 'Southern Asia', 'type': 'subcontinent' },
    { 'code': '035', 'name': 'South-Eastern Asia', 'type': 'subcontinent' },
    { 'code': '145', 'name': 'Western Asia', 'type': 'subcontinent' }
]
const EuropeSubContent = [
    { 'code': '150', 'name': 'Europe', 'type': 'continent' },
    { 'code': '154', 'name': 'Northern Europe', 'type': 'subcontinent' },
    { 'code': '155', 'name': 'Western Europe', 'type': 'subcontinent' },
    { 'code': '151', 'name': 'Eastern Europe', 'type': 'subcontinent' },
    { 'code': '039', 'name': 'Southern Europe', 'type': 'subcontinent' }
]
const OceaniaSubContent = [
    { 'code': '009', 'name': 'Oceania', 'type': 'continent' },
    { 'code': '053', 'name': 'Australia and New Zealand', 'type': 'subcontinent' },
    { 'code': '054', 'name': 'Melanesia', 'type': 'subcontinent' },
    { 'code': '057', 'name': 'Micronesia', 'type': 'subcontinent' },
    { 'code': '061', 'name': 'Polynesia', 'type': 'subcontinent' },
]
const usList = [
    { "name": "United State of America", "code": "US", "type": "countries" },
    { "name": "United State of America - State", "code": "US", "type": "provinces" },
    { "name": "United State of America - Metropolitan areas", "code": "US", "type": "metros" },
    { "name": "Alabama", "code": "AL", "type": "provinces" },
    { "name": "Alaska", "code": "AK", "type": "provinces" },
    { "name": "American Samoa", "code": "AS", "type": "provinces" },
    { "name": "Arizona", "code": "AZ", "type": "provinces" },
    { "name": "Arkansas", "code": "AR", "type": "provinces" },
    { "name": "California", "code": "CA", "type": "provinces" },
    { "name": "Colorado", "code": "CO", "type": "provinces" },
    { "name": "Connecticut", "code": "CT", "type": "provinces" },
    { "name": "Delaware", "code": "DE", "type": "provinces" },
    { "name": "District Of Columbia", "code": "DC", "type": "provinces" },
    { "name": "Federated States Of Micronesia", "code": "FM", "type": "provinces" },
    { "name": "Florida", "code": "FL", "type": "provinces" },
    { "name": "Georgia", "code": "GA", "type": "provinces" },
    { "name": "Guam", "code": "GU", "type": "provinces" },
    { "name": "Hawaii", "code": "HI", "type": "provinces" },
    { "name": "Idaho", "code": "ID", "type": "provinces" },
    { "name": "Illinois", "code": "IL", "type": "provinces" },
    { "name": "Indiana", "code": "IN", "type": "provinces" },
    { "name": "Iowa", "code": "IA", "type": "provinces" },
    { "name": "Kansas", "code": "KS", "type": "provinces" },
    { "name": "Kentucky", "code": "KY", "type": "provinces" },
    { "name": "Louisiana", "code": "LA", "type": "provinces" },
    { "name": "Maine", "code": "ME", "type": "provinces" },
    { "name": "Marshall Islands", "code": "MH", "type": "provinces" },
    { "name": "Maryland", "code": "MD", "type": "provinces" },
    { "name": "Massachusetts", "code": "MA", "type": "provinces" },
    { "name": "Michigan", "code": "MI", "type": "provinces" },
    { "name": "Minnesota", "code": "MN", "type": "provinces" },
    { "name": "Mississippi", "code": "MS", "type": "provinces" },
    { "name": "Missouri", "code": "MO", "type": "provinces" },
    { "name": "Montana", "code": "MT", "type": "provinces" },
    { "name": "Nebraska", "code": "NE", "type": "provinces" },
    { "name": "Nevada", "code": "NV", "type": "provinces" },
    { "name": "New Hampshire", "code": "NH", "type": "provinces" },
    { "name": "New Jersey", "code": "NJ", "type": "provinces" },
    { "name": "New Mexico", "code": "NM", "type": "provinces" },
    { "name": "New York", "code": "NY", "type": "provinces" },
    { "name": "North Carolina", "code": "NC", "type": "provinces" },
    { "name": "North Dakota", "code": "ND", "type": "provinces" },
    { "name": "Northern Mariana Islands", "code": "MP", "type": "provinces" },
    { "name": "Ohio", "code": "OH", "type": "provinces" },
    { "name": "Oklahoma", "code": "OK", "type": "provinces" },
    { "name": "Oregon", "code": "OR", "type": "provinces" },
    { "name": "Palau", "code": "PW", "type": "provinces" },
    { "name": "Pennsylvania", "code": "PA", "type": "provinces" },
    { "name": "Puerto Rico", "code": "PR", "type": "provinces" },
    { "name": "Rhode Island", "code": "RI", "type": "provinces" },
    { "name": "South Carolina", "code": "SC", "type": "provinces" },
    { "name": "South Dakota", "code": "SD", "type": "provinces" },
    { "name": "Tennessee", "code": "TN", "type": "provinces" },
    { "name": "Texas", "code": "TX", "type": "provinces" },
    { "name": "Utah", "code": "UT", "type": "provinces" },
    { "name": "Vermont", "code": "VT", "type": "provinces" },
    { "name": "Virgin Islands", "code": "VI", "type": "provinces" },
    { "name": "Virginia", "code": "VA", "type": "provinces" },
    { "name": "Washington", "code": "WA", "type": "provinces" },
    { "name": "West Virginia", "code": "WV", "type": "provinces" },
    { "name": "Wisconsin", "code": "WI", "type": "provinces" },
    { "name": "Wyoming", "code": "WY", "type": "provinces" }
]
const countryList = [
    { 'name': 'Afghanistan', 'code': 'AF', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Åland Islands', 'code': 'AX', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Albania', 'code': 'AL', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Algeria', 'code': 'DZ', 'type': 'countries', 'continent': '002', 'subcontinent': '015' },
    { 'name': 'American Samoa', 'code': 'AS', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'AndorrA', 'code': 'AD', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Angola', 'code': 'AO', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Anguilla', 'code': 'AI', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Antigua and Barbuda', 'code': 'AG', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Argentina', 'code': 'AR', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Armenia', 'code': 'AM', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Aruba', 'code': 'AW', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Australia', 'code': 'AU', 'type': 'countries', 'continent': '009', 'subcontinent': '053' },
    { 'name': 'Austria', 'code': 'AT', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Azerbaijan', 'code': 'AZ', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Bahamas', 'code': 'BS', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Bahrain', 'code': 'BH', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Bangladesh', 'code': 'BD', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Barbados', 'code': 'BB', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Belarus', 'code': 'BY', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Belgium', 'code': 'BE', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Belize', 'code': 'BZ', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Benin', 'code': 'BJ', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Bermuda', 'code': 'BM', 'type': 'countries', 'continent': '019', 'subcontinent': '021' },
    { 'name': 'Bhutan', 'code': 'BT', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Bolivia', 'code': 'BO', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Bosnia and Herzegovina', 'code': 'BA', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Botswana', 'code': 'BW', 'type': 'countries', 'continent': '002', 'subcontinent': '018' },
    { 'name': 'Brazil', 'code': 'BR', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Brunei Darussalam', 'code': 'BN', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Bulgaria', 'code': 'BG', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Burkina Faso', 'code': 'BF', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Burundi', 'code': 'BI', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Cambodia', 'code': 'KH', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Cameroon', 'code': 'CM', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Canada', 'code': 'CA', 'type': 'countries', 'continent': '019', 'subcontinent': '021' },
    { 'name': 'Cape Verde', 'code': 'CV', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Cayman Islands', 'code': 'KY', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Central African Republic', 'code': 'CF', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Chad', 'code': 'TD', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Chile', 'code': 'CL', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'China', 'code': 'CN', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Colombia', 'code': 'CO', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Comoros', 'code': 'KM', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Congo', 'code': 'CG', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Congo, The Democratic Republic of the', 'code': 'CD', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Cook Islands', 'code': 'CK', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Costa Rica', 'code': 'CR', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Cote D\'Ivoire', 'code': 'CI', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Croatia', 'code': 'HR', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Cuba', 'code': 'CU', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Cyprus', 'code': 'CY', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Czech Republic', 'code': 'CZ', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Denmark', 'code': 'DK', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Djibouti', 'code': 'DJ', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Dominica', 'code': 'DM', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Dominican Republic', 'code': 'DO', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Ecuador', 'code': 'EC', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Egypt', 'code': 'EG', 'type': 'countries', 'continent': '002', 'subcontinent': '015' },
    { 'name': 'El Salvador', 'code': 'SV', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Equatorial Guinea', 'code': 'GQ', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Eritrea', 'code': 'ER', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Estonia', 'code': 'EE', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Ethiopia', 'code': 'ET', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Falkland Islands (Malvinas)', 'code': 'FK', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Faroe Islands', 'code': 'FO', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Fiji', 'code': 'FJ', 'type': 'countries', 'continent': '009', 'subcontinent': '054' },
    { 'name': 'Finland', 'code': 'FI', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'France', 'code': 'FR', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'French Guiana', 'code': 'GF', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'French Polynesia', 'code': 'PF', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Gabon', 'code': 'GA', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Gambia', 'code': 'GM', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Georgia', 'code': 'GE', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Germany', 'code': 'DE', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Ghana', 'code': 'GH', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Gibraltar', 'code': 'GI', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Greece', 'code': 'GR', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Greenland', 'code': 'GL', 'type': 'countries', 'continent': '019', 'subcontinent': '021' },
    { 'name': 'Grenada', 'code': 'GD', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Guadeloupe', 'code': 'GP', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Guam', 'code': 'GU', 'type': 'countries', 'continent': '009', 'subcontinent': '057' },
    { 'name': 'Guatemala', 'code': 'GT', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Guernsey', 'code': 'GG', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Guinea', 'code': 'GN', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Guinea-Bissau', 'code': 'GW', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Guyana', 'code': 'GY', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Haiti', 'code': 'HT', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Holy See (Vatican City State)', 'code': 'VA', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Honduras', 'code': 'HN', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Hong Kong', 'code': 'HK', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Hungary', 'code': 'HU', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Iceland', 'code': 'IS', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'India', 'code': 'IN', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Indonesia', 'code': 'ID', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Iran, Islamic Republic Of', 'code': 'IR', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Iraq', 'code': 'IQ', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Ireland', 'code': 'IE', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Isle of Man', 'code': 'IM', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Israel', 'code': 'IL', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Italy', 'code': 'IT', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Jamaica', 'code': 'JM', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Japan', 'code': 'JP', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Jersey', 'code': 'JE', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Jordan', 'code': 'JO', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Kazakhstan', 'code': 'KZ', 'type': 'countries', 'continent': '142', 'subcontinent': '143' },
    { 'name': 'Kenya', 'code': 'KE', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Kiribati', 'code': 'KI', 'type': 'countries', 'continent': '009', 'subcontinent': '057' },
    { 'name': 'Korea, Democratic People\'S Republic of', 'code': 'KP', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Korea, Republic of', 'code': 'KR', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Kuwait', 'code': 'KW', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Kyrgyzstan', 'code': 'KG', 'type': 'countries', 'continent': '142', 'subcontinent': '143' },
    { 'name': 'Lao People\'S Democratic Republic', 'code': 'LA', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Latvia', 'code': 'LV', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Lebanon', 'code': 'LB', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Lesotho', 'code': 'LS', 'type': 'countries', 'continent': '002', 'subcontinent': '018' },
    { 'name': 'Liberia', 'code': 'LR', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Libyan Arab Jamahiriya', 'code': 'LY', 'type': 'countries', 'continent': '002', 'subcontinent': '015' },
    { 'name': 'Liechtenstein', 'code': 'LI', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Lithuania', 'code': 'LT', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Luxembourg', 'code': 'LU', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Macao', 'code': 'MO', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Macedonia, The Former Yugoslav Republic of', 'code': 'MK', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Madagascar', 'code': 'MG', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Malawi', 'code': 'MW', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Malaysia', 'code': 'MY', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Maldives', 'code': 'MV', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Mali', 'code': 'ML', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Malta', 'code': 'MT', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Marshall Islands', 'code': 'MH', 'type': 'countries', 'continent': '009', 'subcontinent': '057' },
    { 'name': 'Martinique', 'code': 'MQ', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Mauritania', 'code': 'MR', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Mauritius', 'code': 'MU', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Mayotte', 'code': 'YT', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Mexico', 'code': 'MX', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Micronesia, Federated States of', 'code': 'FM', 'type': 'countries', 'continent': '009', 'subcontinent': '057' },
    { 'name': 'Moldova, Republic of', 'code': 'MD', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Monaco', 'code': 'MC', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Mongolia', 'code': 'MN', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Montserrat', 'code': 'MS', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Morocco', 'code': 'MA', 'type': 'countries', 'continent': '002', 'subcontinent': '015' },
    { 'name': 'Mozambique', 'code': 'MZ', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Myanmar', 'code': 'MM', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Namibia', 'code': 'NA', 'type': 'countries', 'continent': '002', 'subcontinent': '018' },
    { 'name': 'Nauru', 'code': 'NR', 'type': 'countries', 'continent': '009', 'subcontinent': '057' },
    { 'name': 'Nepal', 'code': 'NP', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Netherlands', 'code': 'NL', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Netherlands Antilles', 'code': 'AN', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'New Caledonia', 'code': 'NC', 'type': 'countries', 'continent': '009', 'subcontinent': '054' },
    { 'name': 'New Zealand', 'code': 'NZ', 'type': 'countries', 'continent': '009', 'subcontinent': '053' },
    { 'name': 'Nicaragua', 'code': 'NI', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Niger', 'code': 'NE', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Nigeria', 'code': 'NG', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Niue', 'code': 'NU', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Norfolk Island', 'code': 'NF', 'type': 'countries', 'continent': '009', 'subcontinent': '053' },
    { 'name': 'Northern Mariana Islands', 'code': 'MP', 'type': 'countries', 'continent': '009', 'subcontinent': '057' },
    { 'name': 'Norway', 'code': 'NO', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Oman', 'code': 'OM', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Pakistan', 'code': 'PK', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Palau', 'code': 'PW', 'type': 'countries', 'continent': '009', 'subcontinent': '057' },
    { 'name': 'Palestinian Territory, Occupied', 'code': 'PS', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Panama', 'code': 'PA', 'type': 'countries', 'continent': '019', 'subcontinent': '013' },
    { 'name': 'Papua New Guinea', 'code': 'PG', 'type': 'countries', 'continent': '', 'subcontinent': '' },
    { 'name': 'Paraguay', 'code': 'PY', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Peru', 'code': 'PE', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Philippines', 'code': 'PH', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Pitcairn', 'code': 'PN', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Poland', 'code': 'PL', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Portugal', 'code': 'PT', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Puerto Rico', 'code': 'PR', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Qatar', 'code': 'QA', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Reunion', 'code': 'RE', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Romania', 'code': 'RO', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Russian Federation', 'code': 'RU', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'RWANDA', 'code': 'RW', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Saint Helena', 'code': 'SH', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Saint Kitts and Nevis', 'code': 'KN', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Saint Lucia', 'code': 'LC', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Saint Pierre and Miquelon', 'code': 'PM', 'type': 'countries', 'continent': '019', 'subcontinent': '021' },
    { 'name': 'Saint Vincent and the Grenadines', 'code': 'VC', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Samoa', 'code': 'WS', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'San Marino', 'code': 'SM', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Sao Tome and Principe', 'code': 'ST', 'type': 'countries', 'continent': '002', 'subcontinent': '017' },
    { 'name': 'Saudi Arabia', 'code': 'SA', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Senegal', 'code': 'SN', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Seychelles', 'code': 'SC', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Sierra Leone', 'code': 'SL', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Singapore', 'code': 'SG', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Slovakia', 'code': 'SK', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'Slovenia', 'code': 'SI', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Solomon Islands', 'code': 'SB', 'type': 'countries', 'continent': '009', 'subcontinent': '054' },
    { 'name': 'Somalia', 'code': 'SO', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'South Africa', 'code': 'ZA', 'type': 'countries', 'continent': '002', 'subcontinent': '018' },
    { 'name': 'Spain', 'code': 'ES', 'type': 'countries', 'continent': '150', 'subcontinent': '039' },
    { 'name': 'Sri Lanka', 'code': 'LK', 'type': 'countries', 'continent': '142', 'subcontinent': '034' },
    { 'name': 'Sudan', 'code': 'SD', 'type': 'countries', 'continent': '002', 'subcontinent': '015' },
    { 'name': 'Suriname', 'code': 'SR', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Svalbard and Jan Mayen', 'code': 'SJ', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Swaziland', 'code': 'SZ', 'type': 'countries', 'continent': '002', 'subcontinent': '018' },
    { 'name': 'Sweden', 'code': 'SE', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'Switzerland', 'code': 'CH', 'type': 'countries', 'continent': '150', 'subcontinent': '155' },
    { 'name': 'Syrian Arab Republic', 'code': 'SY', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Taiwan, Province of China', 'code': 'TW', 'type': 'countries', 'continent': '142', 'subcontinent': '030' },
    { 'name': 'Tajikistan', 'code': 'TJ', 'type': 'countries', 'continent': '142', 'subcontinent': '143' },
    { 'name': 'Tanzania, United Republic of', 'code': 'TZ', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Thailand', 'code': 'TH', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Timor-Leste', 'code': 'TL', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Togo', 'code': 'TG', 'type': 'countries', 'continent': '002', 'subcontinent': '011' },
    { 'name': 'Tokelau', 'code': 'TK', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Tonga', 'code': 'TO', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Trinidad and Tobago', 'code': 'TT', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Tunisia', 'code': 'TN', 'type': 'countries', 'continent': '002', 'subcontinent': '015' },
    { 'name': 'Turkey', 'code': 'TR', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Turkmenistan', 'code': 'TM', 'type': 'countries', 'continent': '142', 'subcontinent': '143' },
    { 'name': 'Turks and Caicos Islands', 'code': 'TC', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Tuvalu', 'code': 'TV', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Uganda', 'code': 'UG', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Ukraine', 'code': 'UA', 'type': 'countries', 'continent': '150', 'subcontinent': '151' },
    { 'name': 'United Arab Emirates', 'code': 'AE', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'United Kingdom', 'code': 'GB', 'type': 'countries', 'continent': '150', 'subcontinent': '154' },
    { 'name': 'United States', 'code': 'US', 'type': 'countries', 'continent': '019', 'subcontinent': '021' },
    { 'name': 'United States Minor Outlying Islands', 'code': 'UM', 'type': 'countries', 'continent': '019', 'subcontinent': '021' },
    { 'name': 'Uruguay', 'code': 'UY', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Uzbekistan', 'code': 'UZ', 'type': 'countries', 'continent': '142', 'subcontinent': '143' },
    { 'name': 'Vanuatu', 'code': 'VU', 'type': 'countries', 'continent': '009', 'subcontinent': '054' },
    { 'name': 'Venezuela', 'code': 'VE', 'type': 'countries', 'continent': '019', 'subcontinent': '005' },
    { 'name': 'Viet Nam', 'code': 'VN', 'type': 'countries', 'continent': '142', 'subcontinent': '035' },
    { 'name': 'Virgin Islands, British', 'code': 'VG', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Virgin Islands, U.S.', 'code': 'VI', 'type': 'countries', 'continent': '019', 'subcontinent': '029' },
    { 'name': 'Wallis and Futuna', 'code': 'WF', 'type': 'countries', 'continent': '009', 'subcontinent': '061' },
    { 'name': 'Western Sahara', 'code': 'EH', 'type': 'countries', 'continent': '002', 'subcontinent': '015' },
    { 'name': 'Yemen', 'code': 'YE', 'type': 'countries', 'continent': '142', 'subcontinent': '145' },
    { 'name': 'Zambia', 'code': 'ZM', 'type': 'countries', 'continent': '002', 'subcontinent': '014' },
    { 'name': 'Zimbabwe', 'code': 'ZW', 'type': 'countries', 'continent': '002', 'subcontinent': '014' }
]

var code = 'world';
var ResulationType = 'countries';
var mapMode = 'auto';
var interactive = true;
var tooltipCheckbox = true;
var ValueArray = [];
var mapAction = 'simple';
var markerSize = 10;
var textSize = 10;
var mgBackgroundColor = '#ffffff';
var mgBorderColor = '#666666';
var mgBorderWidth = 0;
var mgDefaultColor = '#f5f5f5';
var mgWidth = 0;
var mgHeight = 0;
var mgAspectRation = true;
var mgTooltipTxtColor = '#0000';
var generateType = 'onefile';
var htmlScript;
var cssScript;
var jsScript;
var singleFileScript;
var textModColor = '#000000';

var getSettings = {
    'region': ["world","countries"],
    'mode': mapMode, 
    'api': '',
    'interactive': interactive, 
    'tooltip': tooltipCheckbox, 
    'textsize':textSize,
    'textcolor':textModColor,
    'markersize': markerSize, 
    'action': mapAction, 
    'actiontype': 'urlnewopen_act', 
    'background': mgBackgroundColor, 
    'mapbordercolor': mgBorderColor, 
    'mapborderwidth': mgBorderWidth, 
    'defaultregion': mgDefaultColor, 
    'tooltipcolor': mgTooltipTxtColor, 
    'width': mgWidth, 
    'height': mgHeight, 
    'aspectration': mgAspectRation, 
    'value': ValueArray
}; 

var unique_id;
var unique_mgPopupWrap;
var unique_mgPopup;
var unique_msPopupClose;
var unique_mgPopupContetn;
var unique_hideMe;
var unique_extraValueSet; 

const preview = document.querySelector("#mgPreview");
const mgPopupWrap = document.querySelector("#mgPopupWrap");
const mgPopup = document.querySelector("#mgPopup");
const mgPopupContetn = document.querySelector("#mgPopupContetn");
const interactiveElem = document.querySelector('#interactive');
const tooltipElem = document.querySelector('#tooltip');
const regionElm = document.querySelector('#region');
const regionCodeElem = document.querySelector("#regioncode");
const mapModeOption = document.querySelector('#mode');
const mapActionElem = document.querySelector("#action");
const regionAction = document.querySelector("#regionAction");
const mceArea = document.querySelector("#mceArea");
const mrk_rang = document.querySelector("#mrk_rang");
const mrksize = document.querySelector("#mrksize");
const txtsize = document.querySelector("#txtsize");
const tltipTxtclr = document.querySelector("#tltipTxtclr");
const showScriptSeparet = document.querySelector("#showScript");
const showScriptSingle = document.querySelector("#showScriptSingle");
const showSettings = document.querySelector("#showGetSettings");
const showLoadSettings = document.querySelector("#showLoadSettings");
const htmlCode = document.querySelector("#htmlCode");
const cssCode = document.querySelector("#cssCode");
const jsCode = document.querySelector("#jsCode");
const singleFileCode = document.querySelector("#singleFileCode");
const textModColorElmn = document.querySelector("#textModColor");
const txtmodeclrWrap = document.querySelector("#txtmodeclrWrap");
const action_value = document.querySelector("#action_value");
const v_tooltip = document.querySelector("#v_tooltip");
const v_color = document.querySelector("#v_color");
const apiWrap = document.querySelector("#api_wrap");
const apiInput = document.querySelector("#api");
const loaderWrap = document.querySelector("#loaderWrap");

const regionSubContent = [
    africaSubContent, AmericasSubContent, AsiaSubContent, EuropeSubContent, OceaniaSubContent
]

let regionOption = `<option value='world,countries'>World</option>`;

regionSubContent.map(data => {
    data.map((d, index) => {
        if (index == 0) {
            regionOption += `<option value='${d.code},${d.type}'>${d.name} - Continent</option><optgroup label="${d.name} - Subcontinent">`;
        } else if (index == data.length - 1) {
            regionOption += `<option value='${d.code},${d.type}'>${d.name}</option></optgroup>`;
        } else {
            regionOption += `<option value='${d.code},${d.type}'>${d.name}</option>`;
        }
    })
})

usList.map((d, index) => {
    if (index < 2) {
        regionOption += `<option value='${d.code},${d.type}'>${d.name}</option>`;
    } else if (index == 2) {
        regionOption += `<option value='${d.code},${d.type}'>${d.name}</option><optgroup label="USA States & Metropolitan Areas">`;
    } else if (index == usList.length - 1) {
        regionOption += `<option value='${d.code},${d.type}'>${d.name} - States</option><option value='${d.code},metros'>${d.name} - Metropolitan Areas</option></optgroup>`;
    } else {
        regionOption += `<option value='US-${d.code},${d.type}'>${d.name} - States</option>`;
        regionOption += `<option value='US-${d.code},metros'>${d.name} - Metropolitan Areas</option>`;
    }
})

countryList.map(d => {
    regionOption += `<option value='${d.code},${d.type},${d.continent},${d.subcontinent}'>${d.name}</option>`;
    regionOption += `<option value='${d.code},provinces,${d.continent},${d.subcontinent}'>${d.name} - Provinces</option>`;
})
regionElm.innerHTML = regionOption;


const changeMap = () => {
    loaderWrap.style.display = "block";
    setTimeout(() => {
        loaderWrap.style.display = "none";
    }, 500)

    if (mapModeOption.value != "regions") {

        if (apiInput.value == "" || apiInput.value == null) {
            return apiInput.style.backgroundColor = '#fcb1b1';
        } else {
            apiInput.style.backgroundColor = '#ffffff';
        }
    }
    ValueArray = [];

    const regionInputDisable = () => {
        v_color.disabled = true;
        action_value.disabled = true;
        v_tooltip.disabled = true;
    }

    const regionInputEnable = () => {
        v_color.disabled = false;
        action_value.disabled = false;
        v_tooltip.disabled = false;
    }

    /* regionAction , mceArea */
    console.log(mapAction)


    /* value end */
    const regArray = regionElm.value.split(",");
    code = regArray[0];
    ResulationType = regArray[1] == 'metros' ? 'metros' : regArray[1] == 'provinces' ? 'provinces' : 'countries';
    continent = regArray[2];
    subcontinent = regArray[3];

    interactive = interactiveElem.checked;
    tooltipCheckbox = tooltipElem.checked;

    regionCodeFunc(regArray[1], regArray[0]);
    mapReload();
    addedListView()

    if (mapMode == 'markers') {
        if (code == 'US' && ResulationType == 'metros') {
            regionInputDisable();
            regionCodeElem.disabled = true;
        } else {
            regionInputEnable();
            regionCodeElem.disabled = false;
        }

        if (mapAction == 'simple') {
            action_value.disabled = false;
            mceArea.style.display = 'none';
        } else if (mapAction == 'popup') {
            action_value.disabled = true;
            mceArea.style.display = 'grid';
        } else {
            action_value.disabled = true;
            mceArea.style.display = 'none';
        }
    } else if (mapMode == 'text') {
        regionInputDisable();
        regionCodeElem.disabled = false;
        textModColor = textModColorElmn.value;
    } else {
        if (code == 'US' && ResulationType == 'metros') {
            regionInputDisable();
            regionCodeElem.disabled = true;
        } else {
            regionInputEnable();
            regionCodeElem.disabled = false;
        }

        if (mapAction == 'simple') {
            action_value.disabled = false;
            mceArea.style.display = 'none';
        } else if (mapAction == 'popup') {
            action_value.disabled = true;
            mceArea.style.display = 'grid';
        } else {
            action_value.disabled = true;
            mceArea.style.display = 'none';
        }
    }

    // settings update 
    getSettings.region = regArray; 
    getSettings.mode = mapModeOption.value;
    getSettings.api = mapModeOption.value != "regions" && apiInput.value; 
    getSettings.markersize = markerSize; 
    getSettings.textsize = textSize; 
    getSettings.textcolor = textModColor; 
    getSettings.interactive = interactive; 
    getSettings.tooltip = tooltipCheckbox; 
    getSettings.action = mapAction;
    getSettings.actiontype = regionAction.value; 


   
}

const regionCodeFunc = (regionCodeType, regVal) => {
    let regionCodeOption = `<option value='none'>Unselected</option>`;

    if (regionCodeType != 'metros' && regionCodeType != 'provinces' && regionCodeType != 'countries' && regVal != 'US' && regVal != 'world') {

        countryList.map(data => {
            if (data[`${regionCodeType}`] == regVal) {
                regionCodeOption += `<option value='${data.code},${data.name}'>${data.name}</option>`;
                console.log(data[`${regionCodeType}`])
            }
        })
    } else if (regVal == 'US') {

        usList.map((data, index) => {
            if (index > 2) {
                regionCodeOption += `<option value='${data.code},${data.name}'>${data.name}</option>`;
            }
        })
    } else if (regVal == 'world') {
        countryList.map((data, index) => {
            regionCodeOption += `<option value='${data.code},${data.name}'>${data.name}</option>`;
        })
    }
    regionCodeElem.innerHTML = regionCodeOption;
}
let regionCodeOption = `<option value='none'>Unselected</option>`;
countryList.map((data, index) => {
    regionCodeOption += `<option value='${data.code},${data.name}'>${data.name}</option>`;
})
regionCodeElem.innerHTML = regionCodeOption;

const actionOnchange = (v) => {
    mapAction = v.value;
    /* regionAction , mceArea */
    if (v.value == 'simple') {
        regionAction.parentElement.style.display = 'block';
    } else if (v.value == 'popup' || v.value == 'sideview') {
        regionAction.parentElement.style.display = 'none';
    } else {
        regionAction.parentElement.style.display = 'none';
    }

}
const modeOnchange = (v) => {
    mapMode = v.value;

    const txtDisableElemnt = () => {
        interactiveElem.disabled = true;
        tooltipElem.disabled = true;
        mapActionElem.disabled = true;
        regionAction.disabled = true;
        tltipTxtclr.disabled = true;

        interactiveElem.parentElement.style.display = 'none';
        tooltipElem.parentElement.style.display = 'none';
        mapActionElem.parentElement.style.display = 'none';
        regionAction.parentElement.style.display = 'none';
    }

    const txtEnableElemnt = () => {
        interactiveElem.disabled = false;
        tooltipElem.disabled = false;
        mapActionElem.disabled = false;
        regionAction.disabled = false;
        tltipTxtclr.disabled = false;

        interactiveElem.parentElement.style.display = 'block';
        tooltipElem.parentElement.style.display = 'block';
        mapActionElem.parentElement.style.display = 'block';
        regionAction.parentElement.style.display = 'block';
    }

    if (v.value == 'markers') {
        mrk_rang.style.display = 'block';
        txtmodeclrWrap.style.display = 'none';
        txt_rang.style.display = 'none';
        apiInput.parentElement.style.display = 'grid';
        apiInput.disabled = false;
        txtEnableElemnt()
    } else if (v.value == 'text') {
        txtDisableElemnt()
        mrk_rang.style.display = 'none';
        txtmodeclrWrap.style.display = 'block';
        txt_rang.style.display = 'block';
        apiInput.parentElement.style.display = 'grid';
        apiInput.disabled = false;
    } else {
        mrk_rang.style.display = 'none';
        txtmodeclrWrap.style.display = 'none';
        txt_rang.style.display = 'none';
        apiInput.parentElement.style.display = 'none';
        apiInput.disabled = true;
        txtEnableElemnt()
    }

}
const resetSettings = () => {
    mgBackgroundColor = '#ffffff';
    mgBorderColor = '#00000';
    mgBorderWidth = 0;
    mgDefaultColor = '#f5f5f5';
    mgWidth = 0;
    mgHeight = 0;
    mgAspectRation = true;
    mgTooltipTxtColor = '#0000';

    document.getElementById('bgclr_id').value = mgBackgroundColor;
    document.getElementById('border_clr_id').value = mgBorderColor;
    document.getElementById('brd_width_id').value = mgBorderWidth;
    document.getElementById('default_color_id').value = mgDefaultColor;
    document.getElementById('mapWidth_id').value = mgWidth;
    document.getElementById('mapHeight_id').value = mgHeight;
    document.getElementById('ratio').checked = mgAspectRation;
    tltipTxtclr.value = mgTooltipTxtColor;
    mapReload()
}

const markerSizeOnChange = (v) => {

    markerSize = v.value;
    mrksize.innerText = v.value;

}
const textSizeOnChange = (v) => {

    textSize = v.value;
    txtsize.innerText = v.value;

}
const backgoundColorOnChange = (v) => {
    mgBackgroundColor = v.value;
    getSettings.background = v.value; 
    mapReload()
}
const borderColorOnChange = (v) => {
    mgBorderColor = v.value;
    getSettings.mapbordercolor = v.value; 
    mapReload()
}

const borderWidthOnChange = (v) => {
    mgBorderWidth = v.value;
    getSettings.mapborderwidth = v.value;
    mapReload()
}
const defaultRegionColorOnChange = (v) => {
    mgDefaultColor = v.value;
    getSettings.defaultregion = v.value; 
    mapReload();
}

const widhtOnChange = (v) => {
    mgWidth = v.value;
    getSettings.width = v.vlaue; 
    mapReload();
}

const heightOnChange = (v) => {
    mgHeight = v.value;
    getSettings.height = v.value; 
    mapReload();
}

const rationOnChange = (v) => {
    mgAspectRation = v.checked;
    getSettings.aspectration =  v.checked; 
    mapReload();
}

const tooltipTxtColor = (v) => {
    mgTooltipTxtColor = v.value;
    getSettings.tooltipcolor = v.value; 
    mapReload();
}
const valueAddFunc = () => {

    if (regionCodeElem.value != 'none') {

        const regArray = regionCodeElem.value.split(",");
        console.log({ 'v': `${regArray[0]}`, 't': `${regArray[1]}`, 'tooltip': `${v_tooltip.value}`, 'color': `${v_color.value}` })
        const setValue = { 'v': `${regArray[0]}`, 't': `${regArray[1]}`, 'tooltip': `${v_tooltip.value}`, 'color': `${v_color.value}`, 'action_value': `${action_value.value}`, 'mce_value': `${nicEditors.findEditor('popupText').getContent()}` }
        ValueArray.push(setValue)
        getSettings.value = ValueArray;
        nicEditors.findEditor('popupText').setContent('')
        regionCodeElem.options[regionCodeElem.selectedIndex].disabled = true;
        mapReload();
        addedListView();
        regionCodeElem.value = 'none';
    } else {
        alert("please select from the list");
    }

}
const valueRemoveFunc =(cntName, arrayIndex) =>{

    for (let i = 0; i < regionCodeElem.options.length; i++) {
      if (regionCodeElem.options[i].text === cntName) {
        regionCodeElem.options[i].disabled = false;
        break;
      }
    }

    ValueArray.splice(arrayIndex, 1);
    addedListView(); 
    mapReload();
    
}
const addedListView = () => {
    const viewElemnt = document.getElementById("addedList");
    let viewList = '<ul>';

    ValueArray.map((data, index) => {

        viewList += `<li><span class='cntclr' style='background-color: ${mapMode == 'text' ? textModColor : data.color}'></span><span class='cnt'>${data.t}</span><span onclick='valueRemoveFunc("${data.t}",${index})' class='valueRemove'>x</span></li>`;

    })

    viewList += '</ul>'
    viewElemnt.innerHTML = viewList;
}
const mapReload = () => {

    const googleObjectSet = apiInput.disabled == false ? {
        'packages': ['geochart'],
        'mapsApiKey': `${apiInput.value}`
    } :
        {
            'packages': ['geochart'],
        };
    console.log(apiInput.disabled + " : " + apiInput.value)
    console.log(googleObjectSet)

    google.charts.load('current', googleObjectSet);

    google.charts.setOnLoadCallback(drawMarkersMap);

    function drawMarkersMap() {
        var getColor = [];
        var extraValueSet = [];
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Country');
        data.addColumn('number', 'Value');
        mapMode != 'text' && data.addColumn({ type: 'string', role: 'tooltip' });

        ValueArray.map((d, index) => {
            getColor.push(d.color);

            console.log(mapMode + " map mode ");

            if (mapMode == 'regions' || mapMode == 'auto') {
                data.addRows([[{ 'v': `${d.v}`, 'f': `${d.t}` }, index, `${d.tooltip}`]]);
            } else if (mapMode == 'markers') {
                data.addRows([[`${d.t}`, index, `${d.tooltip}`]]);
            } else if (mapMode == 'text') {
                data.addRows([[d.t, 1]]);
            }

            extraValueSet.push(mapAction == 'simple' ? d.action_value : mapAction == 'popup' || mapAction == 'sideview' ? d.mce_value : '');
        })
        var options = {
            sizeAxis: { minSize: mapMode == 'text' ? textSize : markerSize, maxSize: mapMode == 'text' ? textSize : markerSize },
            region: `${code}`,
            displayMode: `${mapMode}`,
            enableRegionInteractivity: `${interactive}`,
            resolution: `${ResulationType}`,
            magnifyingGlass: { enable: true, zoomFactor: 7.5 },
            colorAxis: { minValue: 0, maxValue: mapMode == 'text' ? 1 : getColor.length > 0 ? getColor.length - 1 : 0, colors: mapMode == 'text' ? textModColor : getColor },
            legend: 'none',
            backgroundColor: { fill: mgBackgroundColor, stroke: mgBorderColor, strokeWidth: mgBorderWidth },
            datalessRegionColor: mgDefaultColor,
            height: mgHeight,
            width: mgWidth,
            keepAspectRatio: mgAspectRation,
            tooltip: { textStyle: { color: mgTooltipTxtColor }, showColorCode: false, trigger: `${tooltipCheckbox ? 'focus' : 'none'}` }
        };

        var chart = new google.visualization.GeoChart(document.getElementById("mgPreview"));

        google.visualization.events.addListener(chart, 'select', function () {
            const selectedMapRow = chart.getSelection()[0].row;
            const getDataRow = data.getValue(selectedMapRow, 1);
            if (mapAction == 'simple') {

                if (regionAction.value == 'urlopen_act') {
                    window.open(`${extraValueSet[getDataRow]}`, "_self")
                } else if (regionAction.value == 'urlnewopen_act') {
                    window.open(`${extraValueSet[getDataRow]}`, "_blank")
                } else if (regionAction.value == 'alert_act') {
                    alert(extraValueSet[getDataRow]);
                }
            } else if (mapAction == 'popup') {
                mgPopupContetn.innerHTML = extraValueSet[getDataRow];
                mgPopupWrap.style.display = 'grid';
            }
        })

        chart.draw(data, options);
    };
}

const hideMe = (id) => {
    document.getElementById(`${id}`).style.display = 'none';
}
mapReload();

const tab = (btnId) => {
    const htmlCodeArea = document.querySelector(`#htmlCodeArea`)
    const jsCodeArea = document.querySelector(`#jsCodeArea`)
    const cssCodeArea = document.querySelector(`#cssCodeArea`)

    const htmlTab = document.querySelector(`#htmlTab`)
    const jsTab = document.querySelector(`#jsTab`)
    const cssTab = document.querySelector(`#cssTab`)

    if (btnId == 'htmlTab') {
        htmlTab.classList.add('active');
        jsTab.classList.remove('active');
        cssTab.classList.remove('active');

        htmlCodeArea.style.display = "block";
        jsCodeArea.style.display = "none";
        cssCodeArea.style.display = "none";
    } else if (btnId == 'jsTab') {
        htmlTab.classList.remove('active');
        jsTab.classList.add('active');
        cssTab.classList.remove('active');

        htmlCodeArea.style.display = "none";
        jsCodeArea.style.display = "block";
        cssCodeArea.style.display = "none";
    } else if (btnId == 'cssTab') {
        htmlTab.classList.remove('active');
        jsTab.classList.remove('active');
        cssTab.classList.add('active');

        htmlCodeArea.style.display = "none";
        jsCodeArea.style.display = "none";
        cssCodeArea.style.display = "block";
    }

}
const generateTypeOnchange = (t) => {

    generateType = t.value;
    console.log(t.value)

}

const generateButton = () => {
    /* auto generate ids */
    unique_id = 'mgPreview-' + Math.floor(Math.random() * 99999) + 1;
    unique_mgPopupWrap = 'mgPopupWrap' + Math.floor(Math.random() * 99999) + 1;
    unique_mgPopup = 'mgPopup' + Math.floor(Math.random() * 99999) + 1;
    unique_msPopupClose = 'msPopupClose' + Math.floor(Math.random() * 99999) + 1;
    unique_mgPopupContetn = 'mgPopupContetn' + Math.floor(Math.random() * 99999) + 1;
    unique_hideMe = 'hideMe' + Math.floor(Math.random() * 99999) + 1;
    const unique_extraValueSet = 'extraValueSet' + Math.floor(Math.random() * 99999) + 1;

    /* js script code generate */
    var getColor = [];
    var extraValueSet = [];
    let setGoogleDataArray = " ";
    let gnMapAction = " ";

    showScriptSeparet.style.display = 'none';
    showScriptSingle.style.display = 'none';
    showSettings.style.display = 'none'; 
    showLoadSettings.style.display = 'none'; 

    ValueArray.map((d, index) => {
        getColor.push(`'${d.color}'`)

        if (mapMode == 'regions' || mapMode == 'auto') {
            setGoogleDataArray += (`data.addRows([[{ 'v': '${d.v}', 'f': '${d.t}' }, ${index}, '${d.tooltip}']]);\n`)
        } else if (mapMode == 'markers') {
            setGoogleDataArray += (`data.addRows([['${d.t}', ${index}, '${d.tooltip}']]);\n`);
        } else if (mapMode == 'text') {
            setGoogleDataArray += (`data.addRows([['${d.t}', 1]]);\n`);
        }

        extraValueSet.push(mapAction == 'simple' ? `'${d.action_value}'` : mapAction == 'popup' || mapAction == 'sideview' ? `'${d.mce_value}'` : '');
    });

    console.log(extraValueSet)
    let jsscriptGn = `
    google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': '${apiInput.disabled == false && apiInput.value}'
    });
    google.charts.setOnLoadCallback(drawMarkersMap);
    function drawMarkersMap() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Country');
        data.addColumn('number', 'Value');
       ${mapMode != 'text' && "data.addColumn({ type: 'string', role: 'tooltip' });"} 
    `;

    jsscriptGn += setGoogleDataArray;

    jsscriptGn += `
    var ${unique_extraValueSet} = [`+ extraValueSet + `]`;

    jsscriptGn += `
    var options = {
        sizeAxis: {minSize:${markerSize},  maxSize: ${markerSize}},
        region: '${code}',
        displayMode: '${mapMode}',
        enableRegionInteractivity: '${interactive}',
        resolution: '${ResulationType}',
        magnifyingGlass: {enable: true, zoomFactor: 7.5},
        colorAxis: { minValue: 0, maxValue:${mapMode == 'text' ? 1 : getColor.length > 0 ? getColor.length - 1 : 0}, colors: ${mapMode == 'text' ? '"' + textModColor + '"' : '[' + getColor + ']'} },
        legend: 'none',
        backgroundColor: {fill: '${mgBackgroundColor}', stroke: '${mgBorderColor}', strokeWidth: ${mgBorderWidth}},
        datalessRegionColor: '${mgDefaultColor}', 
        height: ${mgHeight},
        width: ${mgWidth},
        keepAspectRatio: ${mgAspectRation},
        tooltip: { textStyle: { color: '${mgTooltipTxtColor}' }, showColorCode: false, trigger: '${tooltipCheckbox ? 'focus' : 'none'}' }
    };
    var chart = new google.visualization.GeoChart(document.getElementById('${unique_id}'));
    `;

    jsscriptGn += `google.visualization.events.addListener(chart, 'select', function () {
        const selectedMapRow = chart.getSelection()[0].row;
        const getDataRow = data.getValue(selectedMapRow, 1); 
         `;

    if (mapAction == 'simple') {

        if (regionAction.value == 'urlopen_act') {
            jsscriptGn += `window.open(${unique_extraValueSet}[getDataRow],"_self")`;
        } else if (regionAction.value == 'urlnewopen_act') {
            jsscriptGn += `window.open(${unique_extraValueSet}[getDataRow],"_blank")`;
        } else if (regionAction.value == 'alert_act') {
            jsscriptGn += `alert(${unique_extraValueSet}[getDataRow])`;
        }
    } else if (mapAction == 'popup') {
        jsscriptGn += `const ${unique_mgPopupWrap} = document.querySelector("#${unique_mgPopupWrap}"); \n`
        jsscriptGn += `${unique_mgPopupContetn}.innerHTML = ${unique_extraValueSet}[getDataRow]\n`;
        jsscriptGn += `${unique_mgPopupWrap}.style.display ='grid'`;
    }

    jsscriptGn += `    })

    chart.draw(data, options);
}`;

    jsscriptGn += `\n const ${unique_hideMe} =()=> { \n document.getElementById('${unique_mgPopupWrap}').style.display ="none"; \n }`;
    /* html script generate start */
    let htmlScriptGn = `
    <div id="mgPreviewWrap">
        <div id="${unique_id}" class="mgPreview"></div>
        <div id='${unique_mgPopupWrap}'>
            <div id='${unique_mgPopup}'>
                <span onclick="${unique_hideMe}()" id="${unique_msPopupClose}">x</span>
                <div id="${unique_mgPopupContetn}"></div>
            </div>
        </div>
    </div>`;
    /* end html script */
    /* css script generate start */
    let cssScriptGn = `
    /*pop up window */
    #${unique_mgPopupWrap} {
        position: fixed;
        width: 100%;
        height: 100%;
       /*display: grid;*/ 
        display: none;
        left: 0;
        top: 0;
    }
    #${unique_mgPopupWrap}::after {
        content: "";
        background: #000;
        width: 100%;
        height: 100%;
        position: fixed;
        opacity: 0.4;
    }
    #${unique_mgPopup} {
        width: 400px;
        background: #fff;
        padding: 15px;
        margin: auto;
        position: relative;
        z-index: 999;
    }
    #${unique_mgPopup} img {
        max-width: 100%;
    }
    #${unique_mgPopup} ul, #${unique_mgPopup} ol {
        padding-left: 35px;
    }
    #${unique_mgPopup} li {
        padding-bottom: 5px;
    }
    #${unique_msPopupClose} {
        position: absolute;
        top: -10px;
        right: -10px;
        background: #800000;
        padding: 5px 10px 7px 10px;
        border-radius: 50%;
        font-weight: bold;
        text-align: center;
        color: #ffff;
        font-size: 12px;
        cursor: pointer;
    }
    #${unique_mgPopupContetn} {
        max-height: 400px;
        padding-right: 10px;
        overflow-y: auto;
    }
    `;
    /* css script generate end */
    /*
    let singleFileScriptGn = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
        ${cssScriptGn}
        </style>
        <script type='text/javascript' src='https://www.gstatic.com/charts/loader.js'></script>
    </head>   
    <body>
    
    ${htmlScriptGn}
    <script>
    ${jsscriptGn}
    </script>
    </body>
    </html>
    ` ;
    */

    let singleFileScriptGn = `
    <style>
    ${cssScriptGn}
    </style>
    ${htmlScriptGn}
    <script type='text/javascript' src='https://www.gstatic.com/charts/loader.js'></script>
    <script>
    ${jsscriptGn}
    </script>
` ;
    let htmlScriptForMultiple = `
<link rel="stylesheet" href="mapstyle.css">
${htmlScriptGn}

<script type='text/javascript' src='https://www.gstatic.com/charts/loader.js'></script>
<script src="mapgenerator.js"></script>
`;
    if (generateType == 'onefile') {
        console.log(singleFileScriptGn)
        singleFileCode.innerText = singleFileScriptGn;
        showScriptSingle.style.display = 'block';
    } else if (generateType == 'separate') {
        htmlCode.innerText = htmlScriptForMultiple;
        jsCode.innerText = jsscriptGn;
        cssCode.innerText = cssScriptGn;
        showScriptSeparet.style.display = 'block';
    }

    jsScript = jsscriptGn;
    htmlScript = htmlScriptForMultiple;
    cssScript = cssScriptGn;
    singleFileScript = singleFileScriptGn;

}

const getsettingsFunc = ()=>{
    const settingsArray = document.getElementById('settingsArray'); 
    settingsArray.innerText =JSON.stringify(getSettings); 
    showSettings.style.display = 'block'; 
}
const showloadSettingsFunc =()=>{
    showLoadSettings.style.display = 'block'; 
}
const loadSettings =()=>{
    const settingsArray = document.getElementById('loadsetings'); 
    const settings =  JSON.parse(settingsArray.value); 
    getSettings = settings; 
    console.log(settings)

        /* value end */
    const regArray = settings.region;
    code = regArray[0];
    ResulationType = regArray[1] == 'metros' ? 'metros' : regArray[1] == 'provinces' ? 'provinces' : 'countries';
    mapMode = settings.mode; 
    interactive = settings.interactive
    tooltipCheckbox = settings.tooltip; 
    mapAction = settings.action; 
    markerSize = settings.markersize;
    textSize = settings.textsize; 
    textModColor = settings.textcolor; 
    mgBackgroundColor = settings.background; 
    mgBorderColor = settings.mapbordercolor; 
    mgBorderWidth = settings.mapborderwidth
    mgDefaultColor = settings.defaultregion; 
    mgWidth = settings.width; 
    mgHeight = settings.height; 
    mgAspectRation = settings.aspectration; 
    mgTooltipTxtColor = settings.tooltipcolor; 
    regionAction.value  = settings.actiontype
    ValueArray = settings.value;
    apiInput.value = settings.api; 

    document.getElementById('bgclr_id').value = mgBackgroundColor;
    document.getElementById('border_clr_id').value = mgBorderColor;
    document.getElementById('brd_width_id').value = mgBorderWidth;
    document.getElementById('default_color_id').value = mgDefaultColor;
    document.getElementById('mapWidth_id').value = mgWidth;
    document.getElementById('mapHeight_id').value = mgHeight;
    document.getElementById('ratio').checked = mgAspectRation;
    tltipTxtclr.value = mgTooltipTxtColor;
    
    const regionInputDisable = () => {
        v_color.disabled = true;
        action_value.disabled = true;
        v_tooltip.disabled = true;
    }

    const regionInputEnable = () => {
        v_color.disabled = false;
        action_value.disabled = false;
        v_tooltip.disabled = false;
    }
    if (mapMode == 'markers') {
        if (code == 'US' && ResulationType == 'metros') {
            regionInputDisable();
            regionCodeElem.disabled = true;
        } else {
            regionInputEnable();
            regionCodeElem.disabled = false;
        }

        if (mapAction == 'simple') {
            action_value.disabled = false;
            mceArea.style.display = 'none';
        } else if (mapAction == 'popup') {
            action_value.disabled = true;
            mceArea.style.display = 'grid';
        } else {
            action_value.disabled = true;
            mceArea.style.display = 'none';
        }
    } else if (mapMode == 'text') {
        regionInputDisable();
        regionCodeElem.disabled = false;
        textModColor = textModColorElmn.value;
    } else {
        if (code == 'US' && ResulationType == 'metros') {
            regionInputDisable();
            regionCodeElem.disabled = true;
        } else {
            regionInputEnable();
            regionCodeElem.disabled = false;
        }

        if (mapAction == 'simple') {
            action_value.disabled = false;
            mceArea.style.display = 'none';
        } else if (mapAction == 'popup') {
            action_value.disabled = true;
            mceArea.style.display = 'grid';
        } else {
            action_value.disabled = true;
            mceArea.style.display = 'none';
        }
    }


            regionCodeFunc(regArray[1], regArray[0]);
            mapReload();
            addedListView()


        ValueArray.map(data=>{
            console.log(data.t)
            for (let i = 0; i < regionCodeElem.options.length; i++) {
                if (regionCodeElem.options[i].text === data.t) {
                  regionCodeElem.options[i].disabled = true;
                  console.log('match')
                }
              }
        })
}

const copyScript = (codeType) => {

    const copyText = document.querySelectorAll('.copied');
    console.log(copyText.length)
    if (codeType == 'html') {
        navigator.clipboard.writeText(htmlScript);
    } else if (codeType == 'css') {
        navigator.clipboard.writeText(cssScript);
    } else if (codeType == 'js') {
        navigator.clipboard.writeText(jsScript);
    } else if (codeType == 'singleFile') {
        navigator.clipboard.writeText(singleFileScript);
    }else if (codeType == 'settings') {
        navigator.clipboard.writeText(JSON.stringify(getSettings));
    }

    copyText.forEach(d => {
        d.classList.add('active');
        setTimeout(() => d.classList.remove('active'), 1000)
    })
}

/* rich text edite TINYMCE */
bkLib.onDomLoaded(function () {

    new nicEditor({ buttonList: ['bold', 'italic', 'underline', 'left', 'center', 'right', 'ol', 'ul', 'link', 'unlink', 'image', 'forecolor'] }).panelInstance('popupText');
    mceArea.style.display = 'none';

});
