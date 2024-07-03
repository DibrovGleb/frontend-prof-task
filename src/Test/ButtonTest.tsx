import Button from '@/components/Button/Button';
import './ButtonTest.sass';
import { dataPrimaryBtn, dataSecondaryBtn } from "@/data/dataButton";

export default function ButtonTest() {

  return (
    <>
      <div className="button-container">
        <div className="">
          <h2>Primary</h2>
          <div className="button-primary">
            {dataPrimaryBtn?.map(x =>
              <div key={crypto.randomUUID()}>
                <p>{Object.entries(x).map(x => x.join(':').slice(0, 18)).join(' ')}</p>
                <Button text={x.text} size={x.size} state={x.state} counter={x.counter} />
              </div>
            )}
          </div>
        </div>
        <div className="">
          <h2>Secondary</h2>
          <div className="button-secondary">
            {dataSecondaryBtn?.map(x =>
              <div key={crypto.randomUUID()}>
                <p>{Object.entries(x).map(x => x.join(':').slice(0, 18)).join(' ')}</p>
                <Button text={x.text} type={x.type} size={x.size}
                  state={x.state} counter={x.counter} />
              </div>
            )}
          </div>
        </div>
      </div >
    </>
  )
}