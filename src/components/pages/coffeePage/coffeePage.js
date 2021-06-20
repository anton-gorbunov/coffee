import React, {useState} from 'react';
import CoffeeList from '../../coffeeList/coffeeList';
import useLoadingData from '../../useLoadingData/useLoadingData';
import Spinner from '../../spinner/spinner'
import Divider from '../../divider/divider';

import './coffeePage.scss';

const CoffeePage = () => {
    const {loading, items} = useLoadingData();
    const filteredItems = items.filter(item => item.category === 'main');
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const visibleItems = filterItems(filter,serchItems(search, filteredItems))
    const filterArr = [
        {id:1, title: 'all'},
        {id:2, title:'Brazil'},
        {id:3, title:'Kenya'},
        {id:4, title:'Columbia'}
    ];
    function filterItems(filter, items) {
        if (filter === 'all') {
            return items;
        }
        return items.filter(item => item.country === filter);
    }
    function serchItems(search, items) {
        if (search.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.title.indexOf(search) > -1;
        });
    }
    function onInputChange(event) {
        setSearch(event.target.value);
    }
    const filterButtons = filterArr.map(item => {
        const {title, id} = item;
        const active = filter === title;
        const classList = active ? 'goods__filter-item_active' : '';
        return (
            <li 
                key={id}
                className={`goods__filter-item ${classList}`} 
                onClick={() => setFilter(title)}
            >
                {title}
            </li>
        );
    });
    if (loading) {
        return <Spinner/>
    }
    return (
        <CoffeePageLayout
            buttons={filterButtons}
            searchValue={search}
            items={visibleItems}
            onInputChange={onInputChange}
        />
    );
}
const CoffeePageLayout = ({buttons, searchValue, items, onInputChange}) => {
    return (
        <>
            <section className="aboutOur">
                <div className="container">
                    <div className="aboutOur__wrapper">
                        <img src="icons/aboutBeansImg.png" alt="aboutBeansImg" className="aboutOur__img"/>
                        <div className="aboutOur__descr">
                            <h2 className="aboutOur__title">About our beans</h2>
                            <Divider classList="line line_black"/>
                            <div className="aboutOur__text">
                                <p className="aboutOur__paragraph">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                                <p className="aboutOur__paragraph">
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. 
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="line line_black line_240"></div>
                </div>
            </section>
            <section className="goods">
                <div className="container">
                    <div className="goods__sort">
                        <div className="goods__locate">
                            <div className="goods__locate-title">Looking for</div>
                            <input 
                                type="text"
                                placeholder="start typing here..."
                                className="goods__locate-input"
                                onChange={onInputChange}
                                value={searchValue}
                            />
                        </div>
                        <div className="goods__filter">
                            <div className="goods__filter-title">Or filter</div>
                            <ul className="goods__filter-menu">
                                {buttons}
                            </ul>
                        </div>
                    </div>
                    <CoffeeList coffeeItems={items}/>
                </div>
            </section>
        </>
    );
}
export default CoffeePage;