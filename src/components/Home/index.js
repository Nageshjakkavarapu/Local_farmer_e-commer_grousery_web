import {Component} from 'react'

import AppItem from '../AppItem'
import TabItem from '../TabItem'

import './index.css'

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'vegetable'},
  {tabId: 'GAMES', displayText: 'frutie'},
  {tabId: 'NEWS', displayText: 'products and hubs'},
  {tabId: 'FOOD', displayText: 'hand craft'},
]

const appsList = [
  {
    appId: 0,
    appName: 'tomato',
    imageUrl:
      'https://th.bing.com/th/id/OIP.AYVLwdv29Yk4SzzsPwZzrQHaFz?w=250&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'SOCIAL',
  },
  {
    appId: 1,
    appName: 'potato',
    imageUrl:
      'https://www.bing.com/th?id=OIP.FcNO4PI-60RQjMTZKrKYBgHaEo&w=236&c=11&rs=1&qlt=90&bgcl=ececec&o=6&pid=PersonalBing&p=0',
    category: 'SOCIAL',
  },
  {
    appId: 2,
    appName: 'garlic',
    imageUrl:
      'https://images.pexels.com/photos/928251/pexels-photo-928251.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 3,
    appName: 'cabage',
    imageUrl:
      'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 4,
    appName: 'ladice finger',
    imageUrl:
      'https://images.pexels.com/photos/2583187/pexels-photo-2583187.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 5,
    appName: 'swite corn',
    imageUrl:
      'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 6,
    appName: 'Pepprica',
    imageUrl:
      'https://images.pexels.com/photos/87626/paprika-vegetables-green-food-87626.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 7,
    appName: 'beens',
    imageUrl:
      'https://images.pexels.com/photos/768090/pexels-photo-768090.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 8,
    appName: 'caret',
    imageUrl:
      'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 9,
    appName: 'kera',
    imageUrl:
      'https://images.pexels.com/photos/1691180/pexels-photo-1691180.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'SOCIAL',
  },
  {
    appId: 10,
    appName: 'apple',
    imageUrl:
      'https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 11,
    appName: 'black-graps',
    imageUrl:
      'https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 12,
    appName: 'banana',
    imageUrl:
      'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 13,
    appName: 'black cherries',
    imageUrl:
      'https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 14,
    appName: 'Green apple',
    imageUrl:
      'https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 15,
    appName: 'orange',
    imageUrl:
      'https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 16,
    appName: 'pine apple',
    imageUrl:
      'https://images.pexels.com/photos/165776/pexels-photo-165776.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 17,
    appName: 'stoberry',
    imageUrl:
      'https://images.pexels.com/photos/36736/fruits-strawberries-fruit-red.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 18,
    appName: 'water mellone',
    imageUrl:
      'https://images.pexels.com/photos/59830/melons-water-melons-fruit-green-59830.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 19,
    appName: 'red cherry',
    imageUrl:
      'https://images.pexels.com/photos/52536/raspberry-fruits-fresh-red-52536.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'GAMES',
  },
  {
    appId: 20,
    appName: 'milk',
    imageUrl:
      'https://th.bing.com/th/id/OIP.N7pdB1O-7s19OkBQAbTTuAHaKU?w=132&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 21,
    appName: 'Eggs',
    imageUrl:
      'https://th.bing.com/th/id/OIP.OLfcOSyImw2f9W4A3fboxgHaFJ?w=224&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 22,
    appName: 'veg-pickels',
    imageUrl:
      'https://th.bing.com/th/id/OIP.kUFZpfyAL0bckeVGx2unkgHaD4?w=322&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 23,
    appName: 'non-veg-pickels',
    imageUrl:
      'https://th.bing.com/th/id/OIP.P-R4Pn-2UgyoQJXUi2X7DAHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 24,
    appName: 'butter',
    imageUrl:
      'https://th.bing.com/th/id/OIP.GCFIjm8gdU4SgCyTB2khOgHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 25,
    appName: 'allovara',
    imageUrl:
      'https://th.bing.com/th/id/OIP.gOGapjdO9JhG84WEDMrqFQHaHD?w=195&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 26,
    appName: 'tread-hurbs',
    imageUrl:
      'https://th.bing.com/th/id/OIP._ajiNvVWowlBbTSxYtNvpwAAAA?w=299&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 27,
    appName: 'hurb pouders',
    imageUrl:
      'https://th.bing.com/th/id/OIP.m-KILfN3Q4SPSEJlET-d4wHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 28,
    appName: 'hurb leavs',
    imageUrl:
      'https://th.bing.com/th/id/OIP.TkTFzYORTHlA3Ul15nYveAHaE5?w=277&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 29,
    appName: 'hurb oils',
    imageUrl:
      'https://th.bing.com/th/id/OIP.nYYeAttc20li9BXvHslfqQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'NEWS',
  },
  {
    appId: 30,
    appName: 'carpets',
    imageUrl:
      'https://th.bing.com/th/id/OIP.E4u0JXQBjWKpY-DUcYmTKQHaFI?w=269&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
  {
    appId: 31,
    appName: 'sharpining items',
    imageUrl:
      'https://th.bing.com/th/id/OIP.53bk61pNQT-Ymx4UcmAN3AHaE6?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
  {
    appId: 32,
    appName: 'paintings',
    imageUrl:
      'https://th.bing.com/th/id/OIP.T0Ski-HY469jXQaVYUCHggHaFM?w=278&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
  {
    appId: 33,
    appName: 'chepiri',
    imageUrl:
      'https://th.bing.com/th/id/OIP.ZD8uJQEsuxf21O8ETA-XmgHaIW?w=168&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
  {
    appId: 34,
    appName: 'woden stics',
    imageUrl:
      'https://th.bing.com/th/id/OIP.UoY-tRmtqhkr23sp1x_j8AHaFu?w=246&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7',

    category: 'FOOD',
  },
  {
    appId: 35,
    appName: 'flower pots',
    imageUrl:
      'https://th.bing.com/th/id/OIP.KI6iIdFVj8Ja3NGtCp6ngAAAAA?w=178&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
  {
    appId: 36,
    appName: 'coper pots',
    imageUrl:
      'https://th.bing.com/th/id/OIP.yHkpcPtGmiB4-4wTdW2UYgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
  {
    appId: 37,
    appName: 'dres',
    imageUrl:
      'https://th.bing.com/th?q=Types+Handcrafted&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
    category: 'FOOD',
  },
  {
    appId: 38,
    appName: 'doles',
    imageUrl:
      'https://th.bing.com/th/id/OIP.Aa5Kp_BOdLnjswstJ0I4OQHaFc?w=226&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
  {
    appId: 39,
    appName: 'pot',
    imageUrl:
      'https://th.bing.com/th/id/OIP.dhlSMrnPxgfHfLK2j5cMSQHaFc?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    category: 'FOOD',
  },
]

class Home extends Component {
  state = {
    searchInput: '',
    activeTabId: tabsList[0].tabId,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getActiveTabApps = searchedApps => {
    const {activeTabId} = this.state
    const filteredApps = searchedApps.filter(
      eachSearchedApp => eachSearchedApp.category === activeTabId,
    )

    return filteredApps
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const searchResults = appsList.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput, activeTabId} = this.state
    const searchResults = this.getSearchResults()
    const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="app-container">
        <div className="app-store">
          <h1 className="heading">Farmers store</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src={SEARCH_ICON_URL}
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </ul>
          <ul className="apps-list">
            {filteredApps.map(eachApp => (
              <AppItem key={eachApp.appId} appDetails={eachApp} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
