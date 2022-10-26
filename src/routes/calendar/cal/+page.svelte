<script>
	import FullCalendar, { Draggable } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';
	import timegridPlugin from '@fullcalendar/timegrid';
	import interactionPlugin from '@fullcalendar/interaction';

	let options = {
		dateClick: handleDateClick,
		droppable: false,
		editable: false,
		events: [
        {
          title: 'All Day Event',
          start: '2022-10-01'
        },
        {
          title: 'Long Event',
          start: '2022-10-03',
          end: '2022-10-06'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-10-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2022-10-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '11',
          end: '2022-10-13'
        },
        {
          title: 'Meeting',
          start: '2022-10-12T10:30:00',
          end: '2022-10-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2022-10-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2022-10-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2022-10-20T07:00:00'
        },
        {
          title: 'Evant with link',
          url: 'http://google.com/',
          start: '2022-10-28'
        }
      ],
		initialView: 'dayGridMonth',
		plugins: [daygridPlugin, timegridPlugin, interactionPlugin],
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay',
		},
		height: '100%',
		weekends: true,
	};

	let calendarComponentRef;

	function handleDateClick(event) {
		if (
			confirm('Would you like to add an event to ' + event.dateStr + ' ?')
		) {
			const { events } = options;
			const calendarEvents = [
				...events,
				{
					title: 'New Event',
					start: event.date,
					allDay: event.allDay,
				},
			];
			options = {
				...options,
				events: calendarEvents,
			};
		}
	}
</script>

<svelte:head>
	<title>SvelteKit project template</title>
</svelte:head>

<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6 p-6">
    <div class="flex flex-col md:flex-row justify-center md:justify-between mb-6">
      <div class="self-center">
        <div >
          <div class="flex">
            <button  type="button" class="py-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-4 h-4 ltr:mr-1 rtl:ml-1 bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path>
              </svg>
              Add Schedule
            </button>
          </div>

          <div  tabindex="0" class="z-50 overflow-auto inset-0 w-full h-full fixed py-6" style="display: none;">
            <div class="z-50 relative p-3 mx-auto my-0 max-w-full" style="width: 600px; display: none;"  x-transition:enter="transition duration-500" x-transition:enter-start="transform opacity-0 -translate-y-4" x-transition:enter-end="transform opacity-100 translate-y-0" x-transition:leave="transition -translate-y-4" x-transition:leave-start="transform opacity-100 translate-y-0" x-transition:leave-end="transform opacity-0 -translate-y-4">
              <div class="bg-white dark:bg-gray-800 rounded shadow-lg border dark:border-gray-700 flex flex-col overflow-hidden">
                <button  class="fill-current h-6 w-6 absolute ltr:right-0 rtl:left-0 top-0 m-6 font-3xl font-bold">×</button>
                <!-- modal title -->
                <div class="px-6 py-3 text-xl border-b dark:text-gray-300 dark:border-gray-700 font-bold">Create Schedule</div>
                <!-- modal content -->
                <form action="#">
                  <div class="p-6 flex-grow">
                    <div class="mb-6">
                      <label for="exampleInput1" class="inline-block mb-2">Title</label>
                      <input type="text" class="w-full leading-5 relative text-sm py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampleInput1">
                    </div>
                    <div class="mb-6">
                      <label for="rangetime" class="inline-block mb-2">Start and End date</label>
                      <div id="rangetime" class="flex flex-col justify-center md:flex-row md:justify-between">
                        <input id="startDate" class="startDate w-full leading-5 relative text-sm py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 flatpickr-input" type="text" name="start">
                        <span class="px-4 text-center">to</span>
                        <input id="endDate" class="endDate w-full leading-5 relative text-sm py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" type="text" name="end" data-fp-omit="">  
                      </div>
                    </div>
                    <div class="mb-6">
                      <label class="flex items-center">
                        <input type="checkbox" name="checked-demo" value="1" class="form-checkbox text-indigo-500 h-5 w-5 border border-gray-300 dark:border-gray-700 dark:focus:border-gray-600 dark:bg-gray-700 rounded focus:outline-none ltr:mr-2 rtl:ml-2">
                        <span>All Day</span>
                      </label>
                    </div>
                    <div class="mb-6">
                      <label for="exampleLink" class="inline-block mb-2">With Link</label>
                      <input type="text" class="w-full leading-5 relative text-sm py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampleLink" placeholder="https://">
                    </div>
                    <div class="mb-6">
                      <label for="exampleTextarea1" class="inline-block mb-2">Description</label>
                      <textarea class="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampleTextarea1" rows="3"></textarea>
                    </div>
                    <select class="inline-block w-full leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 select-caret appearance-none dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" aria-label="Default select example">
                      <option selected="">Label</option>
                      <option value="1">Important</option>
                      <option value="2">Business</option>
                      <option value="3">Personal</option>
                    </select>
                  </div>
                  <div class="px-6 py-3 border-t dark:border-gray-700 flex justify-end">
                    <button type="button" class="ltr:mr-2 rtl:ml-2 py-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-pink-500 border border-pink-500 hover:text-white hover:bg-pink-600 hover:ring-0 hover:border-pink-600 focus:bg-pink-600 focus:border-pink-600 focus:outline-none focus:ring-0">Close</button>
                    <button type="submit" class="py-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">Save</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"></div>
          </div>
        </div>
      </div>
      <div class="self-center"><h2 class="text-lg font-semibold">Schedule Calendar</h2></div>
    </div>
    <div class="relative custom-calendar demo-app">
        <div class="demo-app-calendar">
            <FullCalendar bind:this={calendarComponentRef} {options} />
        </div>
    </div>
  </div>
  <style>
	:global(* > *) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.demo-app {
		
		height: 100vh;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
		font-size: 14px;
	}

	.demo-app-calendar {
		width: 100%;
		flex-grow: 1;
		margin: 0 auto;
		max-width: 900px;
	}
	:global(.draggable) {
		color: white;
		background: #3788d8;
		width: fit-content;
		padding: 1rem;
		margin: 1rem;
		cursor: pointer;
	}
</style>