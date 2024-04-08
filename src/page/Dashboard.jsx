import { } from 'react'

const Dashboard = () => {
  return (
    <>

      <div className="Dashboard">
        <div className="dr_name_box">
          <div className="dr_name">
            Dashboard
          </div>
          <div className="dr_name_add">
            Add Driver
          </div>
        </div>

        <div className="dash_card_box">
          <div className="dash_card">
            <div className="dash_card_name_box">
              <div className="dash_card_name">
                USERS
              </div>
              <div className="dash_card_name_2">
                <span>+24</span>
              </div>
            </div>
            <div className="dash_card_num">
              100
            </div>
          </div>
          <div className="dash_card">
            <div className="dash_card_name_box">
              <div className="dash_card_name">
                USERS
              </div>
              <div className="dash_card_name_2">
                <span>+24</span>
              </div>
            </div>
            <div className="dash_card_num">
              100
            </div>
          </div>
          <div className="dash_card">
            <div className="dash_card_name_box">
              <div className="dash_card_name">
                USERS
              </div>
              <div className="dash_card_name_2">
                <span>+24</span>
              </div>
            </div>
            <div className="dash_card_num">
              100
            </div>
          </div>
          <div className="dash_card">
            <div className="dash_card_name_box">
              <div className="dash_card_name">
                USERS
              </div>
              <div className="dash_card_name_2">
                <span>+24</span>
              </div>
            </div>
            <div className="dash_card_num">
              100
            </div>
          </div>
        </div>

        <div className="dash_chart_box">
          <div className="dash_chart_l">
            <div className="dash_l_name">Total Revenue</div>
            <div className="dash_pie">

            </div>
            <div className="dash_l_h">Total sales made today</div>
            <div className="dash_l_num">$420
            </div>
            <div className="dash_l_h">Previous transactions processing. Last payments may not be included.</div>
            <div className="dash_l_stat">
              <div className="dash_l_stat_main">
                <div className="dash_l_h_2">
                  Target
                </div>
                <div className="dash_l_num_2">
                  <span>
                    +$12.4k
                  </span>
                </div>
              </div>
              <div className="dash_l_stat_main">
                <div className="dash_l_h_2">
                Last Week
                </div>
                <div className="dash_l_num_2">
                  <span>
                    +$12.4k
                  </span>
                </div>
              </div>
              <div className="dash_l_stat_main">
                <div className="dash_l_h_2">
                  Last Month
                </div>
                <div className="dash_l_num_2">
                  <span className='span_2'>
                    -$12.4k
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dash_chart_r">
            <div className="dash_r_name">
            Last 6 Months (Revenue)
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Dashboard