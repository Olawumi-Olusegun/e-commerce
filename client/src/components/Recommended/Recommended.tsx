import { useCombinedStore } from '../../store';
import Button from './../Button';
import "./Recommended.css";


const Recommended = () => {

  const handleButtonClick = useCombinedStore((state) => state.handleButtonClick);


  return (
    <div className='recommended-container'>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleButtonClick} value="" title="All Products" />
        <Button onClickHandler={handleButtonClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleButtonClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleButtonClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleButtonClick} value="Vans" title="Vans" />
      </div>
    </div>
  )
}

export default Recommended