const { fireEvent, getByText, getByPlaceholderText, getAllByText } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')
const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('Should render all screen elements', () => {
    expect(container.querySelector('h1')).not.toBeNull()
    expect(getByText(container, 'DCN')).toBeInTheDocument()
    expect(container.querySelector('input')).not.toBeNull()
    expect(getByText(container, 'Kill Component')).toBeInTheDocument()
    expect(container.querySelector('input')).not.toBeNull()
    expect(getByText(container, 'Disconnect Component')).toBeInTheDocument()
    expect(container.querySelector('input')).not.toBeNull()
    expect(getByText(container, 'Reconnect Component')).toBeInTheDocument()
    expect(container.querySelector('input')).not.toBeNull()
    expect(getByPlaceholderText(container, 'Connection/Component Id')).toBeInTheDocument()
    expect(container.querySelector('input')).not.toBeNull()
    expect(getByPlaceholderText(container, 'Job Name')).toBeInTheDocument()
    expect(container.querySelector('input')).not.toBeNull()
    expect(getByPlaceholderText(container, 'Number of Jobs')).toBeInTheDocument()
    expect(container.querySelector('input')).not.toBeNull()
    expect(getByPlaceholderText(container, 'Duration of jobs in ms')).toBeInTheDocument()
    expect(container.querySelector('th')).not.toBeNull()
    expect(getByText(container, 'Job')).toBeInTheDocument()
    expect(container.querySelector('th')).not.toBeNull()
    expect(getByText(container, 'Completed')).toBeInTheDocument()
    expect(container.querySelector('th')).not.toBeNull()
    expect(getByText(container, 'Total')).toBeInTheDocument()
    expect(container.querySelector('th')).not.toBeNull()
    expect(getByText(container, 'Component')).toBeInTheDocument()
    expect(container.querySelector('th')).not.toBeNull()
    expect(getByText(container, 'CPU Utilization %')).toBeInTheDocument()
    expect(container.querySelector('th')).not.toBeNull()
    expect(getByText(container, 'RAM Utilization %')).toBeInTheDocument()
  })

  //todo: give varying inputs
  it('Should alert when component/connection selection is not made', async () => {
    const button = getAllByText(container, 'Submit')[0];
    fireEvent.submit(button);
  })
  it('Should alert when component/connection id is not entered', async () => {
    const button = getAllByText(container, 'Submit')[0];
    fireEvent.submit(button);
  })
  it('Should alert when job id is not entered', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })
  it('Should alert when number of jobs is not entered', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })
  it('Should alert when duration of jobs is not entered', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })
  it('Should alert when duration of jobs is not entered', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })
  it('Should alert when number of jobs >100', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })

  it('Should alert when number of jobs <1', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })

  it('Should alert when number of job duration <1s', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })

  it('Should alert when number of job duration >30s', async () => {
    const button = getAllByText(container, 'Submit')[1];
    fireEvent.submit(button);
  })

  it('Should alert when component/connection id is empty', async () => {
    const button = getAllByText(container, 'Submit')[0];
    fireEvent.submit(button);
  })

  it('Should submit when component/connection selection is made and component/connection is entered', async () => {
    const button = getAllByText(container, 'Submit')[0];
    fireEvent.submit(button);
  })

  it('Should submit when 0<=job id<=99 , 0<number of jobs <=100, 0<job duration<=30', async () => {
    const button = getAllByText(container, 'Submit')[0];
    fireEvent.submit(button);
  })
})